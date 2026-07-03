import type { ExerciseViewModel, GifExercise, LocalExercise } from '../types/exercise';
import {
  displayExerciseName,
  labelCategory,
  labelEquipment,
  labelMuscle,
  labelTarget,
  slugifyExerciseName,
} from '../utils/format';

const GIF_INDEX_URL =
  'https://cdn.jsdelivr.net/gh/JahelCuadrado/ExerciseGymGifsDB@v1.1.0/api/en/exercises.json';
const LOCAL_EXERCISES_URL = '/data/exercises.json';

interface GifIndexResponse {
  exercises: GifExercise[];
}

let gifIndexCache: Promise<Map<string, GifExercise>> | null = null;
let localExercisesCache: Promise<LocalExercise[]> | null = null;

function buildGifIndex(items: GifExercise[]) {
  const bySlug = new Map<string, GifExercise>();
  items.forEach((item) => {
    bySlug.set(item.slug, item);
  });
  return bySlug;
}

export async function fetchGifIndex() {
  if (!gifIndexCache) {
    gifIndexCache = fetch(GIF_INDEX_URL)
      .then((response) => {
        if (!response.ok) throw new Error('GIF 索引加载失败');
        return response.json() as Promise<GifIndexResponse>;
      })
      .then((data) => buildGifIndex(data.exercises));
  }

  return gifIndexCache;
}

export async function fetchLocalExercises() {
  if (!localExercisesCache) {
    localExercisesCache = fetch(LOCAL_EXERCISES_URL).then((response) => {
      if (!response.ok) throw new Error('本地动作数据加载失败');
      return response.json() as Promise<LocalExercise[]>;
    });
  }

  return localExercisesCache;
}

export async function getExercisesWithGifs(): Promise<ExerciseViewModel[]> {
  const localExercises = await fetchLocalExercises();

  try {
    const gifIndex = await fetchGifIndex();
    return localExercises.map((exercise) => {
      const matchedGif = gifIndex.get(slugifyExerciseName(exercise.name));
      return normalizeExercise(exercise, matchedGif);
    });
  } catch {
    return localExercises.map((exercise) => normalizeExercise(exercise));
  }
}

function normalizeExercise(exercise: LocalExercise, matchedGif?: GifExercise): ExerciseViewModel {
  return {
    ...exercise,
    gifUrl: matchedGif?.gifUrl ?? undefined,
    gifMatched: Boolean(matchedGif),
    displayName: displayExerciseName(matchedGif?.name ?? exercise.name, exercise),
    displayCategory: labelCategory(exercise.category),
    displayEquipment: labelEquipment(exercise.equipment),
    displayTarget: labelTarget(exercise.target),
    displaySecondaryMuscles: exercise.secondary_muscles.map(labelMuscle),
  };
}
