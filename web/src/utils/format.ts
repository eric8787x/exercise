const categoryLabels: Record<string, string> = {
  back: '背部',
  cardio: '有氧',
  chest: '胸部',
  'lower arms': '前臂',
  'lower legs': '小腿',
  neck: '颈部',
  shoulders: '肩部',
  'upper arms': '上臂',
  'upper legs': '腿部',
  waist: '腰腹',
};

const exerciseNamePhrases: Array<[RegExp, string]> = [
  [/3\/4/g, '四分之三'],
  [/45°/g, '45度'],
  [/\barms apart\b/g, '双臂打开'],
  [/\ball fours\b/g, '四点支撑'],
  [/\bcardiovascular system\b/g, '心肺'],
  [/\bsled machine\b/g, '雪橇机'],
  [/\bstationary bike\b/g, '固定单车'],
  [/\bstepmill machine\b/g, '台阶机'],
  [/\btrap bar\b/g, '六角杠'],
  [/\bupper body ergometer\b/g, '上肢训练机'],
  [/\bresistance band\b/g, '阻力带'],
  [/\bbarbell\b/g, '杠铃'],
  [/\bdumbbell\b/g, '哑铃'],
  [/\bcable\b/g, '绳索'],
  [/\bband\b/g, '弹力带'],
  [/\bkettlebell\b/g, '壶铃'],
  [/\blever\b/g, '器械'],
  [/\bsmith\b/g, '史密斯'],
  [/\bmachine\b/g, '器械'],
  [/\bweighted\b/g, '负重'],
  [/\bassisted\b/g, '辅助'],
  [/\bincline\b/g, '上斜'],
  [/\bdecline\b/g, '下斜'],
  [/\bseated\b/g, '坐姿'],
  [/\bstanding\b/g, '站姿'],
  [/\blying\b/g, '仰卧'],
  [/\bkneeling\b/g, '跪姿'],
  [/\breverse\b/g, '反向'],
  [/\btwisting\b/g, '旋转'],
  [/\bside\b/g, '侧向'],
  [/\bfront\b/g, '前侧'],
  [/\brear\b/g, '后侧'],
  [/\bsingle\b/g, '单侧'],
  [/\balternate\b/g, '交替'],
  [/\bapart\b/g, '打开'],
  [/\bcircular\b/g, '环绕'],
  [/\bcircles?\b/g, '绕环'],
  [/\btouch\b/g, '触碰'],
  [/\btoes?\b/g, '脚尖'],
  [/\bheels?\b/g, '脚跟'],
  [/\bbend\b/g, '侧屈'],
  [/\bpress\b/g, '推举'],
  [/\bcurl\b/g, '弯举'],
  [/\braise\b/g, '抬举'],
  [/\bextension\b/g, '伸展'],
  [/\brotation\b/g, '旋转'],
  [/\bcrunch\b/g, '卷腹'],
  [/\bsit-up\b/g, '仰卧起坐'],
  [/\bsquat\b/g, '深蹲'],
  [/\blunge\b/g, '弓步'],
  [/\brow\b/g, '划船'],
  [/\bpulldown\b/g, '下拉'],
  [/\bpull-up\b/g, '引体向上'],
  [/\bpush-up\b/g, '俯卧撑'],
  [/\bstretch\b/g, '拉伸'],
  [/\bbridge\b/g, '桥式'],
  [/\bplank\b/g, '平板支撑'],
  [/\bbike\b/g, '自行车卷腹'],
  [/\bhip\b/g, '髋'],
  [/\blegs?\b/g, '腿'],
  [/\barms?\b/g, '手臂'],
  [/\bchest\b/g, '胸部'],
  [/\bshoulders?\b/g, '肩部'],
  [/\bback\b/g, '背部'],
  [/\bcalves\b/g, '小腿'],
  [/\bcalf\b/g, '小腿'],
  [/\babs?\b/g, '腹部'],
  [/\bmale\b/g, ''],
  [/\bfemale\b/g, ''],
  [/\bv-\d+\b/g, ''],
];

const equipmentLabels: Record<string, string> = {
  assisted: '辅助',
  band: '弹力带',
  barbell: '杠铃',
  'body weight': '自重',
  'bosu ball': '半圆球',
  cable: '绳索',
  dumbbell: '哑铃',
  'elliptical machine': '椭圆机',
  'ez barbell': '曲杆杠铃',
  hammer: '锤式器械',
  kettlebell: '壶铃',
  'leverage machine': '器械',
  'medicine ball': '药球',
  'olympic barbell': '奥杆',
  'resistance band': '阻力带',
  roller: '滚轮',
  rope: '绳',
  'skierg machine': '滑雪机',
  sled: '雪橇',
  'sled machine': '雪橇机',
  'smith machine': '史密斯机',
  'stability ball': '健身球',
  'stationary bike': '固定单车',
  'stepmill machine': '台阶机',
  tire: '轮胎',
  'trap bar': '六角杠',
  trapbar: '六角杠',
  'upper body ergometer': '上肢训练机',
  'upperbody ergometer': '上肢训练机',
  weighted: '负重',
  'wheel roller': '健腹轮',
};

const targetLabels: Record<string, string> = {
  abs: '腹肌',
  abductors: '外展肌',
  adductors: '内收肌',
  biceps: '肱二头肌',
  calves: '小腿',
  cardiovascular: '心肺',
  'cardiovascular system': '心肺',
  delts: '三角肌',
  forearms: '前臂',
  glutes: '臀肌',
  hamstrings: '腘绳肌',
  lats: '背阔肌',
  levator: '肩胛提肌',
  'levator scapulae': '肩胛提肌',
  pectorals: '胸肌',
  quads: '股四头肌',
  'serratus anterior': '前锯肌',
  spine: '脊柱',
  traps: '斜方肌',
  triceps: '肱三头肌',
  'upper back': '上背',
};

export function labelCategory(value: string) {
  return categoryLabels[value] ?? value;
}

export function labelEquipment(value: string) {
  return equipmentLabels[value] ?? value;
}

export function labelTarget(value: string) {
  return targetLabels[value] ?? value;
}

export function labelMuscle(value: string) {
  const muscleLabels: Record<string, string> = {
    ...targetLabels,
    abdominals: '腹部',
    'ankle stabilizers': '踝稳定肌',
    ankles: '脚踝',
    back: '背部',
    brachialis: '肱肌',
    chest: '胸部',
    core: '核心',
    deltoids: '三角肌',
    feet: '足部',
    'grip muscles': '握力肌群',
    groin: '腹股沟',
    'hip flexors': '髋屈肌',
    'inner thighs': '大腿内侧',
    'latissimus dorsi': '背阔肌',
    'lower abs': '下腹',
    'lower back': '下背部',
    obliques: '腹斜肌',
    quadriceps: '股四头肌',
    hands: '手部',
    wrists: '手腕',
    'rear deltoids': '后三角肌',
    'rotator cuff': '肩袖肌群',
    rhomboids: '菱形肌',
    shins: '胫骨前侧',
    shoulders: '肩部',
    soleus: '比目鱼肌',
    sternocleidomastoid: '胸锁乳突肌',
    trapezius: '斜方肌',
    traps: '斜方肌',
    'upper chest': '上胸',
    'wrist extensors': '腕伸肌',
    'wrist flexors': '腕屈肌',
  };

  return muscleLabels[value] ?? value;
}

export function slugifyExerciseName(value: string) {
  return value
    .toLowerCase()
    .replace(/°/g, '')
    .replace(/\+/g, ' plus ')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function inferActionName(name: string) {
  const lower = name.toLowerCase();
  if (/sit-up|crunch|bike/.test(lower)) return '卷腹';
  if (/stretch/.test(lower)) return '拉伸';
  if (/pull-up/.test(lower)) return '引体向上';
  if (/push-up/.test(lower)) return '俯卧撑';
  if (/pulldown/.test(lower)) return '下拉';
  if (/row/.test(lower)) return '划船';
  if (/squat/.test(lower)) return '深蹲';
  if (/lunge/.test(lower)) return '弓步';
  if (/curl/.test(lower)) return '弯举';
  if (/press/.test(lower)) return '推举';
  if (/raise/.test(lower)) return '抬举';
  if (/extension|extend/.test(lower)) return '伸展';
  if (/rotation|twist|circle/.test(lower)) return '旋转';
  if (/touch/.test(lower)) return '触碰';
  if (/bridge/.test(lower)) return '桥式';
  if (/plank/.test(lower)) return '平板支撑';
  if (/walk/.test(lower)) return '行走';
  if (/run/.test(lower)) return '跑步';
  return '训练';
}

interface DisplayExerciseNameContext {
  category?: string;
  equipment?: string;
  target?: string;
}

export function displayExerciseName(name: string, context: DisplayExerciseNameContext = {}) {
  let normalized = name.toLowerCase();
  exerciseNamePhrases.forEach(([pattern, replacement]) => {
    normalized = normalized.replace(pattern, replacement);
  });
  normalized = normalized.replace(/\//g, '-');

  const compact = normalized
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (/[\u4e00-\u9fa5]/.test(compact)) {
    const withoutEnglish = compact
      .replace(/[a-z]+/gi, ' ')
      .split(' ')
      .filter(Boolean)
      .join('');

    if (withoutEnglish.length >= 2) return withoutEnglish;
  }

  if (context.equipment || context.target || context.category) {
    const pieces = [
      context.equipment ? labelEquipment(context.equipment) : '',
      context.target ? labelTarget(context.target) : context.category ? labelCategory(context.category) : '',
      inferActionName(name),
    ].filter(Boolean);

    return Array.from(new Set(pieces)).join('');
  }

  return name
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
