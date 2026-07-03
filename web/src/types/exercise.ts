export type LanguageCode = 'zh' | 'en' | 'es' | 'it' | 'tr' | 'ru';

export interface LocalExercise {
  id: string;
  name: string;
  category: string;
  body_part: string;
  equipment: string;
  instructions: Partial<Record<LanguageCode, string>>;
  instruction_steps: Partial<Record<LanguageCode, string[]>>;
  muscle_group: string;
  secondary_muscles: string[];
  target: string;
  image: string | null;
  gif_url: string | null;
  media_id?: string;
  created_at?: string;
}

export interface GifExercise {
  id: string;
  slug: string;
  name: string;
  muscle: string;
  bodyPart: string;
  equipment: string;
  category: string;
  secondaryMuscles: string[];
  instructions: string[];
  file: string;
  gifUrl: string;
}

export interface ExerciseViewModel extends LocalExercise {
  gifUrl?: string;
  gifMatched?: boolean;
  displayName: string;
  displayCategory: string;
  displayEquipment: string;
  displayTarget: string;
  displaySecondaryMuscles: string[];
}

export interface ExerciseFilters {
  query: string;
  category: string;
  equipment: string;
  target: string;
}
