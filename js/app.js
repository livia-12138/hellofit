(function () {
'use strict';

/* ================= 图标 ================= */
const ICONS = {
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h0a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55h0a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v0a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1Z"/></svg>',
  chevL: '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
  chevR: '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
  trash: '<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  apple: '<svg viewBox="0 0 24 24"><path d="M12 7c-1 0-2.6-.8-3.5-.8C6 6.2 4.5 8 4.5 10c0 1.3.8 3 1.4 4.5.5 1.3 1.2 3.6 2.2 3.6 1 0 1.2-1 2.6-1s1.6 1 2.7 1c1.2 0 1.8-2 2.3-3.5.5-1.5 1.2-3.4 1.2-4.2 0-.2-.4-1.4-1.3-2-.8-.6-1.7-.7-2.4-.7-1 0-1.8.3-2.2.3Z"/><path d="M12 7c.2-1.6 1.2-3 2.7-3.4.2 1.7-1 3.2-2.7 3.4Z"/></svg>',
  run: '<svg viewBox="0 0 24 24"><path d="M13 4.5a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0Z"/><path d="M15.5 9.5c-1.5-.5-2.5-1-3.5-.8-1.7.4-2 1.8-1.7 3.3l1 4.5"/><path d="M10.5 12.5l-3.5 4.5M7.5 13l-1.8 5M16.5 10l4 1.5M18 20l-3-4 1.5-3"/></svg>',
  scale: '<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="2.2"/><path d="M12 7.5v6"/><path d="M12 13.5 8.5 17a2.6 2.6 0 0 1-4.4-2l.5-3M12 13.5l3.5 3.5a2.6 2.6 0 0 0 4.4-2l-.5-3"/></svg>',
  coin: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M15.5 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"/></svg>',
  fire: '<svg viewBox="0 0 24 24"><path d="M12 22c4 0 6.5-2.5 6.5-6 0-2-1-3.5-2-5 0 1-.8 1.8-1.8 2C15.5 10 14 5 10 3c.5 3-1.5 5-3.5 7-1.6 1.6-2 3-2 4.6C4.5 19 7.5 22 12 22Z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
  protein: '<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 8v8M8.5 10.5c0-2 1.6-3 3.5-3"/></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/></svg>',
  download: '<svg viewBox="0 0 24 24"><path d="M12 3v12M6 9l6 6 6-6"/><path d="M4 20h16"/></svg>',
  upload: '<svg viewBox="0 0 24 24"><path d="M12 15V3M6 9l6-6 6 6"/><path d="M4 20h16"/></svg>',
  x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>',
  paw: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><ellipse cx="12" cy="17" rx="4.3" ry="3.4"/><ellipse cx="5.1" cy="10" rx="2" ry="2.6"/><ellipse cx="10.3" cy="6.2" rx="2" ry="2.6"/><ellipse cx="13.7" cy="6.2" rx="2" ry="2.6"/><ellipse cx="18.9" cy="10" rx="2" ry="2.6"/></svg>',
  cat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8 7 5l2 2.5"/><path d="M19 8l-2-3-2 2.5"/><path d="M3.5 11.5c-.3 2 .6 4 2.3 5.4 1.2 1 3 1.8 5 1.8 2.4 0 4.4-.9 5.8-2.2 1.8-1.7 2.6-3.9 2.3-5"/><path d="M20.5 11.5c.3 2-.6 4-2.3 5.4-1.2 1-3 1.8-5 1.8-2.4 0-4.4-.9-5.8-2.2C6.4 15.3 5.6 13.1 5.9 11.5"/><path d="M8 10h.01M16 10h.01"/><path d="M10 13.5c.6.6 1.4.9 2 .9.6 0 1.4-.3 2-.9"/></svg>',
  tip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2M5.5 5.5 7 7M18.5 5.5 17 7"/><path d="M8 16.5h8"/><path d="M10 16.5c0-4 1-6 2-6s2 2 2 6"/><path d="M12 10.5V13"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 18.5C5.5 9.5 11.5 4.5 19 4.5c0 7.5-5 14-13.5 14Z"/><path d="M19 5C15 9.5 10.5 13.5 6.5 17.5"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2.5h6L17 8h3v11H4V8Z"/><circle cx="12" cy="13.5" r="3.2"/></svg>',
};

function I(name, cls) { return ICONS[name]; }

function brandLogo(size) {
  return '<span class="brand-mark" style="width:' + size + 'px;height:' + size + 'px;font-size:' + Math.round(size * 0.5) + 'px">H</span>';
}

function safeAvatar(src) {
  const fallback = 'assets/hello-avatar.jpg';
  if (!src) return fallback;
  if (src === fallback) return fallback;
  if (/^data:image\/(png|jpe?g|webp|gif);base64,[a-z0-9+/=\s]+$/i.test(src)) return src;
  return fallback;
}

function avatarHTML(size, clickable) {
  const src = safeAvatar(state.profile.avatar);
  return '<span class="avatar' + (clickable ? ' clickable' : '') + '" style="width:' + size + 'px;height:' + size + 'px"' + (clickable ? ' data-action="avatar-click" title="更换头像"' : '') + '>' +
    '<img src="' + esc(src) + '" alt="头像" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'noimg\')">' +
    (clickable ? '<span class="avatar-badge">' + I('camera') + '</span>' : '') +
    '</span>';
}

/* ================= 状态 ================= */
// 兼容旧版本数据，不随品牌名改动
const KEY = 'greenfit_v1';

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

function dateKey(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function todayKey() { return dateKey(new Date()); }
function addDays(key, n) { const d = new Date(key + 'T00:00:00'); d.setDate(d.getDate() + n); return dateKey(d); }
const WD = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
function weekday(key) { return WD[new Date(key + 'T00:00:00').getDay()]; }
function fmtMD(key) { const a = key.split('-'); return Number(a[1]) + '月' + Number(a[2]) + '日'; }
function fmtFull(key) { const a = key.split('-'); return a[0] + '年' + Number(a[1]) + '月' + Number(a[2]) + '日 ' + weekday(key); }

const DEF_PROFILE = {
  name: '', gender: 'female', age: 25, heightCm: 165, weightKg: 55,
  targetKg: 50, activity: 'light', rate: 0.5, startDate: '', unit: 'kg',
};

function defaultState() {
  const t = todayKey();
  return {
    version: 1,
    profile: Object.assign({}, DEF_PROFILE, { startDate: t }),
    customFoods: [],
    meals: [],
    exercises: [],
    weights: [],
    expenses: [],
    meta: { sample: true, onboarded: false },
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !s.profile) return null;
    return s;
  } catch (e) { return null; }
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch (e) { toast('保存失败：存储空间不足'); }
}

function seedSample() {
  const s = defaultState();
  const p = s.profile;
  s.meta.sample = true;
  const start = addDays(todayKey(), -14);
  let w = p.weightKg + 1.8;
  for (let i = 0; i <= 14; i++) {
    const d = addDays(start, i);
    w = w - 0.13 + (Math.random() * 0.16 - 0.08);
    if (d === todayKey()) w = p.weightKg;
    s.weights.push({ id: uid(), date: d, value: Math.round(w * 10) / 10 });
  }
  return s;
}

let state = load() || seedSample();

/* ================= 计算 ================= */
function bmr(p) {
  let b = 10 * p.weightKg + 6.25 * p.heightCm - 5 * p.age;
  return p.gender === 'female' ? b - 161 : b + 5;
}
const ACT = { sedentary: 1.2, light: 1.375, moderate: 1.55, very: 1.725 };
const ACT_NAME = { sedentary: '久坐', light: '轻度活动', moderate: '中度活动', very: '高强度' };
function tdee() { return bmr(state.profile) * (ACT[state.profile.activity] || 1.2); }
function calorieFloor() { return state.profile.gender === 'female' ? 1200 : 1500; }
function budget() {
  const raw = Math.round(tdee() - state.profile.rate * 7700 / 7);
  return Math.max(calorieFloor(), raw);
}
function proteinTarget() { return Math.round(state.profile.weightKg * 1.6); }
function fatTarget() { const b = budget(); return Math.max(40, Math.round(b * 0.25 / 9)); }
function carbTarget() { const b = budget(); const p = proteinTarget() * 4 + fatTarget() * 9; return Math.max(50, Math.round((b - p) / 4)); }
function latestWeight() {
  const ws = state.weights.slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  return ws.length ? ws[ws.length - 1].value : state.profile.weightKg;
}
function weightDelta() { return Math.round((latestWeight() - state.profile.weightKg) * 10) / 10; }

function unitName() { return state.profile.unit === 'jin' ? '斤' : 'kg'; }
function wtFmt(kg) { const v = state.profile.unit === 'jin' ? kg * 2 : kg; return Math.round(v * 10) / 10; }
function wtParse(v) { return state.profile.unit === 'jin' ? v / 2 : v; }

function dayMeals(date) { return state.meals.filter(m => m.date === date); }
function dayExercises(date) { return state.exercises.filter(e => e.date === date); }
function dayTotal(date) {
  const t = { kcal: 0, p: 0, c: 0, f: 0 };
  for (const m of dayMeals(date)) { t.kcal += m.kcal; t.p += m.p; t.c += m.c; t.f += m.f; }
  t.kcal = Math.round(t.kcal); t.p = Math.round(t.p); t.c = Math.round(t.c); t.f = Math.round(t.f);
  return t;
}
function dayBurn(date) { return Math.round(dayExercises(date).reduce((s, e) => s + e.kcal, 0)); }

/* ================= 导航 ================= */
let view = 'dashboard';
let viewDate = todayKey();
let viewMonth = todayKey().slice(0, 7);

function showView(v) {
  view = v;
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  document.querySelectorAll('.view').forEach(s => s.classList.toggle('active', s.id === 'view-' + v));
  window.scrollTo(0, 0);
  renderView(v);
}
function renderView(v) {
  if (v === 'dashboard') renderDashboard();
  else if (v === 'food') renderFood();
  else if (v === 'exercise') renderExercise();
  else if (v === 'weight') renderWeight();
  else if (v === 'expense') renderExpense();
  else if (v === 'settings') renderSettings();
}

/* ================= 通用组件 ================= */
function topbar(title, sub, right) {
  return '<div class="topbar"><div><div class="title">' + title + '</div>' + (sub ? '<div class="sub">' + sub + '</div>' : '') + '</div>' + (right || '') + '</div>';
}
function gearBtn() {
  return '<button class="icon-btn" data-action="nav" data-view="settings" aria-label="设置">' + I('gear') + '</button>';
}
function dateSwitcher() {
  const isToday = viewDate === todayKey();
  return '<div class="date-switch">' +
    '<button class="d-btn" data-action="prev-day" aria-label="前一天">' + I('chevL') + '</button>' +
    '<div class="day">' + fmtMD(viewDate) + '<div class="w">' + weekday(viewDate) + (isToday ? ' · 今天' : '') + '</div></div>' +
    '<button class="d-btn" data-action="next-day" aria-label="后一天">' + I('chevR') + '</button>' +
    (isToday ? '<span class="today">·</span>' : '<button class="today" data-action="back-today">回今天</button>') +
    '</div>';
}
function emptyState(icon, text, actionHtml) {
  return '<div class="empty"><div class="ic">' + I(icon) + '</div><p>' + text + '</p>' + (actionHtml || '') + '</div>';
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.add('hidden'), 1800);
}

/* ================= 弹窗 ================= */
let modalState = {};
function openModal(html) {
  document.getElementById('modal-backdrop').classList.remove('hidden');
  const m = document.getElementById('modal');
  m.innerHTML = '<div class="sheet-handle"></div>' + html;
  m.classList.remove('hidden');
}
function closeModal() {
  document.getElementById('modal-backdrop').classList.add('hidden');
  document.getElementById('modal').classList.add('hidden');
  modalState = {};
}

/* ================= 首次引导 ================= */
function renderOnboarding() {
  const p = state.profile;
  const ob = document.getElementById('onboarding');
  ob.innerHTML =
    '<div class="ob-card">' +
    '<div class="ob-brand">' + brandLogo(92) + '</div>' +
    '<h1>欢迎使用 HelloFit</h1>' +
    '<p class="ob-sub">把饮食、运动、体重与支出记清楚，让每一次减脂决定都有据可依。</p>' +
    '<div class="ob-form">' +
    '<div class="field"><label>怎么称呼你</label><input id="ob-name" placeholder="输入你的昵称" value="' + esc(p.name) + '" maxlength="12"></div>' +
    '<div class="field"><label>体重单位</label><div class="seg">' +
    '<button data-action="ob-unit" data-u="kg" class="on">公斤 kg</button>' +
    '<button data-action="ob-unit" data-u="jin">斤</button></div></div>' +
    '</div>' +
    '<button class="btn btn-primary" data-action="onboard-done">开始记录</button>' +
    '<p class="ob-note">数据只保存在你的设备本地，不上传、无需账号。</p>' +
    '</div>';
  ob.classList.remove('hidden');
  document.body.classList.add('ob-open');
}
function finishOnboarding() {
  const nameEl = document.getElementById('ob-name');
  if (nameEl) state.profile.name = nameEl.value.trim();
  const sel = document.querySelector('[data-action="ob-unit"].on');
  if (sel) state.profile.unit = sel.dataset.u === 'jin' ? 'jin' : 'kg';
  state.meta = state.meta || {};
  if (state.meta.sample) {
    state.weights = [];
    state.meals = [];
    state.exercises = [];
    state.expenses = [];
    state.customFoods = [];
    state.meta.sample = false;
  }
  state.meta.onboarded = true;
  save();
  document.getElementById('onboarding').classList.add('hidden');
  document.body.classList.remove('ob-open');
  toast('欢迎，' + (state.profile.name || '你'));
  showView('dashboard');
}

/* ================= 首页 ================= */
function greeting() {
  const h = new Date().getHours();
  if (h < 5) return '夜深了';
  if (h < 9) return '早上好';
  if (h < 12) return '上午好';
  if (h < 14) return '中午好';
  if (h < 18) return '下午好';
  return '晚上好';
}

const TIPS = [
  '蛋白质是减脂期的重点：每餐约 25–35g，既抗饿又保护肌肉。',
  '称重建议固定在早晨如厕后、进食前，数据才有对比价值。',
  '睡前 2–3 小时结束最后一餐，睡眠质量同样影响减脂效率。',
  '每周减 0.25–0.75kg 更可持续；别盯单日，看整体趋势。',
  '运动后及时补充蛋白质与水分，恢复更快，更容易坚持。',
  '记录支出不是为了节省，而是看清减脂投入的真实构成。',
  '吃到七分饱就停，热量缺口往往藏在最后几口的克制里。',
];
function tipOfDay() { const d = new Date(); return TIPS[(d.getDate() + d.getMonth() * 2) % TIPS.length]; }

function renderDashboard() {
  const p = state.profile;
  const today = todayKey();
  const tt = dayTotal(today);
  const burn = dayBurn(today);
  const net = tt.kcal - burn;
  const bud = budget();
  const pct = bud > 0 ? Math.min(120, tt.kcal / bud * 100) : 0;
  const lw = latestWeight();
  const delta = weightDelta();
  const tPct = p.targetKg && p.weightKg > p.targetKg
    ? Math.min(100, Math.max(0, (p.weightKg - lw) / (p.weightKg - p.targetKg) * 100)) : 0;

  const sampleBanner = state.meta && state.meta.sample
    ? '<div class="privacy-note" style="align-items:center">' + I('sparkle') +
      '<span style="flex:1">当前展示的是示例数据。到「设置」填写真实信息后，这里将只属于你自己。</span>' +
      '<button class="btn btn-ghost btn-sm" data-action="nav" data-view="settings">去填写</button></div>' : '';

  const mealItems = dayMeals(today).slice(0, 4).map(m =>
    '<div class="list-item"><div class="ic" style="background:' + mealColor(m.type) + '">' + I(mealIcon(m.type)) + '</div>' +
    '<div class="grow"><div class="nm">' + esc(m.name) + '</div><div class="ds">' + mealLabel(m.type) + '</div></div>' +
    '<div class="num"><b>' + m.kcal + '</b><div class="ds">千卡</div></div></div>').join('') ||
    '<div class="empty" style="padding:16px"><p>还没有饮食记录，从早餐开始认真对待。</p><button class="btn btn-ghost btn-sm" data-action="goto-food" style="margin:10px auto 0">去记录</button></div>';

  const exItems = dayExercises(today).slice(0, 3).map(e =>
    '<div class="list-item"><div class="ic" style="background:#E87F3D">' + I('run') + '</div>' +
    '<div class="grow"><div class="nm">' + esc(e.name) + '</div><div class="ds">' + e.minutes + ' 分钟</div></div>' +
    '<div class="num"><b>' + e.kcal + '</b><div class="ds">千卡</div></div></div>').join('') ||
    '<div class="empty" style="padding:16px"><p>还没有运动记录，适度活动即可，关键是持续。</p><button class="btn btn-ghost btn-sm" data-action="goto-exercise" style="margin:10px auto 0">去记录</button></div>';

  const html =
    sampleBanner +
    topbar(fmtMD(today), greeting() + '，' + esc(p.name || '朋友'), gearBtn()) +
    '<div class="hero">' +
    '<div class="hero-top"><div class="hero-eyebrow">今日 · 热量进度</div>' + avatarHTML(64, true) + '</div>' +
    '<div class="hero-num"><div class="big">' + Math.max(0, bud - tt.kcal) + '<span class="unit">千卡</span></div>' +
    '<div class="hero-sub">还可摄入 · 预算 ' + bud + ' · 已摄入 ' + tt.kcal + '</div></div>' +
    '<div class="hero-progress"><div class="progress"><i style="width:' + Math.min(100, pct) + '%"></i></div>' +
    '<div class="hero-progress-label">已用 ' + Math.round(Math.min(100, pct)) + '%</div></div>' +
    '<div class="hero-stats">' +
    '<div class="hero-stat"><div class="l">已摄入</div><div class="v">' + tt.kcal + ' <small>kcal</small></div></div>' +
    '<div class="hero-stat"><div class="l">运动消耗</div><div class="v">' + burn + ' <small>kcal</small></div></div>' +
    '<div class="hero-stat"><div class="l">净摄入</div><div class="v ' + (net < bud ? '' : 'over') + '">' + net + ' <small>kcal</small></div></div>' +
    '</div></div>' +

    '<div class="quick-row">' +
    '<button class="quick" data-action="add-meal" data-type="breakfast"><div class="ic">' + I('apple') + '</div><span>记饮食</span></button>' +
    '<button class="quick" data-action="open-exercise"><div class="ic">' + I('run') + '</div><span>记运动</span></button>' +
    '<button class="quick" data-action="open-weight"><div class="ic">' + I('scale') + '</div><span>记体重</span></button>' +
    '<button class="quick" data-action="open-expense"><div class="ic">' + I('coin') + '</div><span>记支出</span></button>' +
    '</div>' +

    '<div class="card tip"><div class="tip-head"><span class="tip-ic">' + I('tip') + '</span><span>今日要点</span></div><p>' + tipOfDay() + '</p></div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>体重进度</h3><button class="link" data-action="nav" data-view="weight">查看</button></div>' +
    '<div class="target-row"><b>' + wtFmt(lw) + ' <small style="font-size:.8rem;font-weight:600">' + unitName() + '</small></b><span class="t">目标 ' + wtFmt(p.targetKg) + ' ' + unitName() + '</span></div>' +
    '<div class="progress"><i style="width:' + tPct + '%"></i></div>' +
    '<div class="target-note"><span>' + (delta <= 0 ? '已减 ' + wtFmt(Math.abs(delta)) + ' ' + unitName() : '较起始 +' + wtFmt(delta) + ' ' + unitName()) + '</span><span>还差 ' + wtFmt(Math.max(0, Math.round((lw - p.targetKg) * 10) / 10)) + ' ' + unitName() + '</span></div>' +
    '</div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>今日饮食</h3><button class="link" data-action="nav" data-view="food">详情</button></div>' +
    '<div class="grid-3">' +
    '<div class="mini-stat"><div class="v">' + tt.kcal + '<small> kcal</small></div><div class="l">已摄入</div></div>' +
    '<div class="mini-stat alt"><div class="v">' + Math.max(0, bud - tt.kcal) + '<small> kcal</small></div><div class="l">还可吃</div></div>' +
    '<div class="mini-stat info"><div class="v">' + tt.p + '<small> g</small></div><div class="l">蛋白质</div></div>' +
    '</div><div style="height:10px"></div>' + mealItems + '</div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>今日运动</h3><button class="link" data-action="nav" data-view="exercise">详情</button></div>' + exItems + '</div>';

  document.getElementById('view-dashboard').innerHTML = html;
}

/* ================= 饮食 ================= */
const MEALS = [
  { id: 'breakfast', label: '早餐', icon: 'apple', color: '#E8A33D' },
  { id: 'lunch', label: '午餐', icon: 'apple', color: '#3DB57C' },
  { id: 'dinner', label: '晚餐', icon: 'apple', color: '#3A7BD5' },
  { id: 'snack', label: '加餐', icon: 'apple', color: '#8E6BB5' },
];
function mealLabel(id) { const m = MEALS.find(x => x.id === id); return m ? m.label : '加餐'; }
function mealColor(id) { const m = MEALS.find(x => x.id === id); return m ? m.color : '#8E6BB5'; }
function mealIcon(id) { return (MEALS.find(x => x.id === id) || MEALS[3]).icon; }

function renderFood() {
  const date = viewDate;
  const tt = dayTotal(date);
  const bud = budget();
  const pt = proteinTarget(), ft = fatTarget(), ct = carbTarget();
  const pPct = Math.min(100, tt.p / pt * 100);
  const fPct = Math.min(100, tt.f / ft * 100);
  const cPct = Math.min(100, tt.c / ct * 100);

  const blocks = MEALS.map(m => {
    const items = dayMeals(date).filter(x => x.type === m.id);
    const sum = items.reduce((s, x) => s + x.kcal, 0);
    const rows = items.map(x =>
      '<div class="list-item"><div class="grow"><div class="nm">' + esc(x.name) + (x.g ? '<small style="font-size:.72rem;color:var(--text-3)"> (' + x.g + 'g)</small>' : '') + '</div>' +
      '<div class="ds">P ' + x.p + 'g · C ' + x.c + 'g · F ' + x.f + 'g</div></div>' +
      '<div class="num"><b>' + x.kcal + '</b></div>' +
      '<button class="del-btn" data-action="del-meal" data-id="' + x.id + '" aria-label="删除">' + I('trash') + '</button></div>').join('');
    return '<div class="meal-block"><div class="meal-head"><div class="nm">' + m.label + ' <em>' + (items.length ? sum + ' kcal' : '') + '</em></div>' +
      '<button class="meal-add" data-action="add-meal" data-type="' + m.id + '" aria-label="添加' + m.label + '">' + I('plus') + '</button></div>' +
      '<div class="meal-card">' + (rows || '<div style="padding:12px 0;color:var(--text-3);font-size:.8rem;text-align:center">暂无记录</div>') + '</div></div>';
  }).join('');

  const html =
    topbar('饮食', '精准记录每一餐，掌握属于你的热量缺口', '') +
    dateSwitcher() +
    '<div class="card"><div class="card-head"><h3><span class="dot"></span>宏量营养素</h3><span class="link">' + tt.kcal + ' / ' + bud + ' kcal</span></div>' +
    '<div class="macro-bar">' +
    '<div class="macro"><div class="top"><span>蛋白质</span><b>' + tt.p + '<small style="font-size:.7rem;color:var(--text-3)">/' + pt + 'g</small></b></div><div class="track"><i style="width:' + pPct + '%;background:var(--grad)"></i></div></div>' +
    '<div class="macro"><div class="top"><span>碳水</span><b>' + tt.c + '<small style="font-size:.7rem;color:var(--text-3)">/' + ct + 'g</small></b></div><div class="track"><i style="width:' + cPct + '%;background:#E8A33D"></i></div></div>' +
    '<div class="macro"><div class="top"><span>脂肪</span><b>' + tt.f + '<small style="font-size:.7rem;color:var(--text-3)">/' + ft + 'g</small></b></div><div class="track"><i style="width:' + fPct + '%;background:#3A7BD5"></i></div></div>' +
    '</div></div>' +
    blocks;

  document.getElementById('view-food').innerHTML = html;
}

function openFoodModal(type) {
  const m = MEALS.find(x => x.id === type) || MEALS[3];
  modalState = { phase: 'db', type: type, food: null, grams: 100 };
  let html =
    '<div class="sheet-title">添加' + m.label + ' · ' + fmtMD(viewDate) + '</div>' +
    '<div class="seg"><button data-action="food-tab" data-tab="db" class="on">食物库</button><button data-action="food-tab" data-tab="custom">自定义</button></div>' +
    '<div id="food-modal-body"></div>' +
    '<button class="btn btn-ghost" data-action="close-modal" style="margin-top:12px">取消</button>';
  openModal(html);
  renderFoodModalBody();
}

function foodSearchBoxHTML(q) {
  return '<div class="search-box">' + I('search') +
    '<input id="food-q" placeholder="搜索食物名称…" value="' + esc(q || '') + '" autocomplete="off">' +
    '<button class="clear" data-action="clear-q">清空</button></div>';
}

function foodResultsHTML(q) {
  const query = (q || '').trim().toLowerCase();
  const matched = [];
  FOOD_DB.forEach(function (f, i) {
    if (f.n.toLowerCase().indexOf(query) !== -1) matched.push({ f: f, i: i });
  });
  const rows = matched.map(function (x) {
    const f = x.f;
    return '<div class="food-search-item"><div><div class="nm">' + esc(f.n) + '</div><div class="ds">' + esc(f.k) + ' kcal/100g · P' + esc(f.p) + ' C' + esc(f.c) + ' F' + esc(f.f) + '</div></div>' +
      '<button class="add" data-action="pick-food" data-idx="' + x.i + '">' + (modalState.foodIdx === x.i ? '已选' : '+ 添加') + '</button></div>';
  }).join('');
  const customRows = state.customFoods.map(function (f, i) { return { f: f, i: i }; })
    .filter(function (x) {
      return x.f && typeof x.f === 'object' &&
        (!query || String(x.f.n || '').toLowerCase().indexOf(query) !== -1);
    })
    .map(function (x) {
      return '<div class="food-search-item"><div><div class="nm">' + esc(x.f.n) + '<span class="tag gray" style="margin-left:6px">我的</span></div><div class="ds">' + esc(x.f.k) + ' kcal/100g</div></div>' +
        '<button class="add" data-action="pick-custom" data-idx="' + x.i + '">添加</button></div>';
    }).join('');
  return customRows + rows || '<div class="empty" style="padding:20px"><p>未找到，试试「自定义」</p></div>';
}

function previewNumsHTML(f, g) {
  return Math.round(f.k * g / 100) + ' kcal · P ' + Math.round(f.p * g / 100) + 'g · C ' + Math.round(f.c * g / 100) + 'g · F ' + Math.round(f.f * g / 100) + 'g';
}

function updateFoodResults(value) {
  modalState.q = value;
  // 已选食物时重新输入，回到搜索结果，避免“选中后换不了”
  if (modalState.food) {
    modalState.food = null;
    modalState.foodIdx = null;
    renderFoodModalBody();
    const nq = document.getElementById('food-q');
    if (nq) { nq.focus(); nq.setSelectionRange(nq.value.length, nq.value.length); }
    return;
  }
  const listEl = document.getElementById('food-list');
  if (!listEl) return;
  const top = listEl.scrollTop;
  listEl.innerHTML = foodResultsHTML(value);
  listEl.scrollTop = top;
}

function bindFoodSearch() {
  const input = document.getElementById('food-q');
  if (!input) return;
  input.addEventListener('compositionstart', function () { modalState.composing = true; });
  input.addEventListener('compositionend', function (e) {
    modalState.composing = false;
    updateFoodResults(e.target.value);
  });
  input.addEventListener('input', function (e) {
    // 中文输入法组合期间不重绘，避免打断候选词
    if (e.isComposing || modalState.composing) return;
    updateFoodResults(e.target.value);
  });
}

function renderFoodModalBody() {
  const body = document.getElementById('food-modal-body');
  if (modalState.phase === 'db') {
    if (modalState.food) {
      const f = modalState.food;
      const g = modalState.grams;
      body.innerHTML =
        foodSearchBoxHTML(modalState.q) +
        '<div class="card" style="box-shadow:none;background:var(--green-50)"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">' +
        '<b style="font-size:.95rem">' + esc(f.n) + '</b><span class="tag green">' + esc(f.k) + ' kcal/100g</span></div>' +
        '<div class="field"><label>食用克数（g）</label><div style="display:flex;align-items:center;gap:10px">' +
        '<button class="d-btn" data-action="grams" data-d="-10">−10</button><button class="d-btn" data-action="grams" data-d="-1">−1</button>' +
        '<input id="grams" type="number" min="1" value="' + g + '" style="text-align:center;font-weight:800;font-size:1.1rem;width:90px;padding:10px">' +
        '<button class="d-btn" data-action="grams" data-d="1">+1</button><button class="d-btn" data-action="grams" data-d="10">+10</button>' +
        '</div></div>' +
        '<div class="macro" style="background:var(--card)"><div class="top"><span>营养预估（' + g + 'g）</span></div>' +
        '<b id="preview-nums" style="font-size:1rem;color:var(--green-900)">' + previewNumsHTML(f, g) + '</b></div>' +
        '<button class="btn btn-primary" data-action="confirm-food" style="margin-top:12px">加入 ' + mealLabel(modalState.type) + '</button></div>';
      bindFoodSearch();
      document.getElementById('grams').addEventListener('input', function (e) {
        modalState.grams = Math.max(1, Number(e.target.value) || 1);
        const el = document.getElementById('preview-nums');
        if (el) el.innerHTML = previewNumsHTML(f, modalState.grams);
      });
    } else {
      body.innerHTML =
        foodSearchBoxHTML(modalState.q) +
        '<div class="food-search-list" id="food-list">' + foodResultsHTML(modalState.q) + '</div>' +
        '<button class="btn btn-primary" data-action="confirm-custom" style="margin-top:10px">没有？直接自定义记录</button>';
      bindFoodSearch();
    }
  } else {
    const g = modalState.grams;
    const c = modalState.custom || { n: '', k: 100, p: 0, c: 0, f: 0 };
    body.innerHTML =
      '<div class="field"><label>食物名称</label><input id="c-n" placeholder="如：自制鸡胸沙拉" value="' + esc(c.n) + '"></div>' +
      '<div style="font-size:.78rem;color:var(--text-3);margin:2px 0 8px">以下为每 100 克的营养数据</div>' +
      '<div class="grid-3" style="grid-template-columns:1fr 1fr;gap:10px">' +
      '<div class="field"><label>热量（kcal）</label><input id="c-k" type="number" min="0" value="' + c.k + '" inputmode="decimal"></div>' +
      '<div class="field"><label>蛋白质（g）</label><input id="c-p" type="number" min="0" step="0.1" value="' + c.p + '" inputmode="decimal"></div>' +
      '<div class="field"><label>碳水（g）</label><input id="c-c" type="number" min="0" step="0.1" value="' + c.c + '" inputmode="decimal"></div>' +
      '<div class="field"><label>脂肪（g）</label><input id="c-f" type="number" min="0" step="0.1" value="' + c.f + '" inputmode="decimal"></div>' +
      '</div>' +
      '<div class="field"><label>食用克数（g）</label><input id="c-g" type="number" min="1" value="' + g + '"></div>' +
      '<button class="btn btn-primary" data-action="confirm-custom-food">保存并加入</button>';
    ['n', 'k', 'p', 'c', 'f', 'g'].forEach(k => {
      const el = document.getElementById('c-' + k);
      if (el) el.addEventListener('input', e => {
        if (k === 'n') modalState.custom = Object.assign({}, modalState.custom, { n: e.target.value });
        else if (k === 'g') modalState.grams = Math.max(1, Number(e.target.value) || 1);
        else modalState.custom = Object.assign({}, modalState.custom, { [k]: Number(e.target.value) || 0 });
      });
    });
  }
}

function addMealRecord(type, name, kcal, p, c, f, g) {
  state.meals.push({ id: uid(), date: viewDate, type: type, name: name, kcal: kcal, p: p, c: c, f: f, g: g });
  save();
}

/* ================= 运动 ================= */
function renderExercise() {
  const date = viewDate;
  const items = dayExercises(date);
  const burn = items.reduce((s, e) => s + e.kcal, 0);
  const today = date === todayKey();

  const rows = items.map(e =>
    '<div class="ex-item"><div class="ic" style="background:linear-gradient(135deg,#F2A25C,#E87F3D)">' + I('run') + '</div>' +
    '<div class="grow"><div class="nm">' + esc(e.name) + '</div><div class="ds">' + e.minutes + ' 分钟' + (e.met ? ' · MET ' + e.met : '') + '</div></div>' +
    '<div class="kcal">' + e.kcal + ' kcal</div>' +
    '<button class="del-btn" data-action="del-ex" data-id="' + e.id + '" aria-label="删除">' + I('trash') + '</button></div>').join('');

  const html =
    topbar('运动', today ? '消耗按 MET × 体重估算，供参考' : '回顾这一天的运动', '') +
    dateSwitcher() +
    '<div class="grid-3" style="margin-bottom:14px">' +
    '<div class="mini-stat"><div class="v">' + burn + '<small> kcal</small></div><div class="l">消耗</div></div>' +
    '<div class="mini-stat alt"><div class="v">' + items.length + '<small> 次</small></div><div class="l">运动</div></div>' +
    '<div class="mini-stat info"><div class="v">' + items.reduce((s, e) => s + e.minutes, 0) + '<small> min</small></div><div class="l">时长</div></div>' +
    '</div>' +
    (rows || emptyState('run', today ? '今天还没有运动记录' : '这一天没有运动记录', '<button class="btn btn-primary btn-sm" data-action="open-exercise">' + I('plus') + ' 记录运动</button>')) +
    (rows ? '<button class="btn btn-primary" data-action="open-exercise">' + I('plus') + ' 再记一条运动</button>' : '');

  document.getElementById('view-exercise').innerHTML = html;
}

function openExerciseModal() {
  modalState = { phase: 'db', met: null, minutes: 30, name: '' };
  const html =
    '<div class="sheet-title">记录运动 · ' + fmtMD(viewDate) + '</div>' +
    '<div class="seg"><button data-action="ex-tab" data-tab="db" class="on">常用运动</button><button data-action="ex-tab" data-tab="custom">自定义</button></div>' +
    '<div id="ex-modal-body"></div>' +
    '<button class="btn btn-ghost" data-action="close-modal" style="margin-top:12px">取消</button>';
  openModal(html);
  renderExerciseModalBody();
}

function renderExerciseModalBody() {
  const body = document.getElementById('ex-modal-body');
  const kg = latestWeight();
  if (modalState.phase === 'db') {
    const ex = modalState.ex;
    const m = modalState.minutes;
    const kcal = ex ? Math.round(ex.met * kg * m / 60) : 0;
    const rows = EXERCISE_DB.map((e, i) =>
      '<div class="food-search-item"><div><div class="nm">' + esc(e.n) + '</div><div class="ds">MET ' + e.met + '</div></div>' +
      '<button class="add" data-action="pick-ex" data-idx="' + i + '">' + (modalState.exIdx === i ? '已选' : '选择') + '</button></div>').join('');
    body.innerHTML =
      '<div class="food-search-list" style="max-height:30dvh">' + rows + '</div>' +
      '<div class="card" style="box-shadow:none;background:var(--green-50);margin-top:10px">' +
      (ex ? '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>' + esc(ex.n) + '</b><span class="tag green">MET ' + ex.met + '</span></div>' : '<div style="color:var(--text-3);font-size:.8rem;margin-bottom:8px">先选择运动类型</div>') +
      '<div class="field"><label>时长（分钟）</label><div style="display:flex;align-items:center;gap:10px">' +
      '<button class="d-btn" data-action="ex-min" data-d="-5">−5</button><button class="d-btn" data-action="ex-min" data-d="-1">−1</button>' +
      '<input id="ex-minutes" type="number" min="1" value="' + m + '" style="text-align:center;font-weight:800;font-size:1.1rem;width:90px;padding:10px">' +
      '<button class="d-btn" data-action="ex-min" data-d="1">+1</button><button class="d-btn" data-action="ex-min" data-d="5">+5</button></div></div>' +
      (ex ? '<div style="display:flex;justify-content:space-between;font-size:.85rem"><span style="color:var(--text-2)">预计消耗（按 ' + kg + 'kg 体重估算）</span><b id="ex-preview" style="color:var(--green-800)">' + kcal + ' kcal</b></div>' : '') +
      '</div>' +
      '<button class="btn btn-primary" data-action="confirm-ex" ' + (ex ? '' : 'disabled style="opacity:.5"') + '>保存运动</button>';
    const mi = document.getElementById('ex-minutes');
    if (mi) mi.addEventListener('input', e => {
      modalState.minutes = Math.max(1, Number(e.target.value) || 1);
      const pv = document.getElementById('ex-preview');
      if (pv && modalState.ex) pv.textContent = Math.round(modalState.ex.met * kg * modalState.minutes / 60) + ' kcal';
    });
  } else {
    const c = modalState.custom || { n: '', kcal: 100 };
    body.innerHTML =
      '<div class="field"><label>运动名称</label><input id="ce-n" placeholder="如：健身房撸铁" value="' + esc(c.n) + '"></div>' +
      '<div class="field"><label>时长（分钟）</label><input id="ce-min" type="number" min="1" value="' + (modalState.minutes || 30) + '"></div>' +
      '<div class="field"><label>消耗热量（kcal，估算）</label><input id="ce-kcal" type="number" min="1" value="' + c.kcal + '"></div>' +
      '<button class="btn btn-primary" data-action="confirm-custom-ex">保存运动</button>';
    ['n', 'min', 'kcal'].forEach(k => {
      const el = document.getElementById('ce-' + k);
      if (el) el.addEventListener('input', e => {
        if (k === 'n') modalState.custom = Object.assign({}, modalState.custom, { n: e.target.value });
        else if (k === 'min') modalState.minutes = Math.max(1, Number(e.target.value) || 1);
        else modalState.custom = Object.assign({}, modalState.custom, { kcal: Number(e.target.value) || 0 });
      });
    });
  }
}

/* ================= 体重 ================= */
function renderWeight() {
  const ws = state.weights.slice().sort((a, b) => (a.date < b.date ? -1 : 1));
  const lw = latestWeight();
  const delta = weightDelta();
  const p = state.profile;
  const tPct = p.targetKg && p.weightKg > p.targetKg ? Math.min(100, Math.max(0, (p.weightKg - lw) / (p.weightKg - p.targetKg) * 100)) : 0;
  const goalDays = p.rate > 0 ? Math.max(0, Math.round((lw - p.targetKg) / (p.rate / 7))) : null;

  const rows = ws.slice().reverse().map((w, i) => {
    const prev = i + 1 < ws.length ? ws[ws.length - 1 - i - 1] : null;
    const diff = prev ? Math.round((w.value - prev.value) * 10) / 10 : null;
    return '<div class="wt-row"><div class="grow"><div class="d">' + fmtMD(w.date) + '</div><div class="w">' + weekday(w.date) + '</div></div>' +
      (diff !== null ? '<span class="diff ' + (diff <= 0 ? 'down' : 'up') + '">' + (diff <= 0 ? '▼' : '▲') + wtFmt(Math.abs(diff)) + '</span>' : '') +
      '<div class="v">' + wtFmt(w.value) + ' <small>' + unitName() + '</small></div>' +
      '<button class="del-btn" data-action="del-weight" data-id="' + w.id + '" aria-label="删除">' + I('trash') + '</button></div>';
  }).join('');

  const html =
    topbar('体重', '固定时间、同样状态下称重，波动更小、参考价值更高', '<button class="icon-btn" data-action="open-weight">' + I('plus') + '</button>') +
    '<div class="month-summary" style="background:linear-gradient(135deg,#2E9E66,#0E5A38)">' +
    '<div class="l">当前体重</div><div class="v">' + wtFmt(lw) + ' <span style="font-size:1rem;font-weight:600">' + unitName() + '</span></div>' +
    '<div class="row">' +
    '<div class="cell"><div class="l">较起始</div><div class="v" style="color:#D9F2E4">' + (delta <= 0 ? '−' + wtFmt(Math.abs(delta)) : '+' + wtFmt(delta)) + ' ' + unitName() + '</div></div>' +
    '<div class="cell"><div class="l">目标</div><div class="v" style="color:#D9F2E4">' + wtFmt(p.targetKg) + ' ' + unitName() + '</div></div>' +
    (goalDays !== null ? '<div class="cell"><div class="l">预计达成</div><div class="v" style="color:#D9F2E4">' + (goalDays === 0 ? '已达成' : '约 ' + goalDays + ' 天') + '</div></div>' : '') +
    '</div></div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>体重趋势</h3><span class="link">' + ws.length + ' 条记录</span></div>' +
    (ws.length > 1 ? weightChart(ws, function (v) { return wtFmt(v); }) + '<div class="chart-axis"><span>' + fmtMD(ws[0].date) + '</span><span>今天</span></div>'
      : '<div class="empty" style="padding:16px"><p>记录两次以上体重即可看到趋势图</p></div>') +
    '</div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>目标进度</h3></div>' +
    '<div class="target-row"><b>' + wtFmt(p.weightKg) + ' <small style="font-size:.8rem;font-weight:600">' + unitName() + '</small></b><span class="t">→ 目标 ' + wtFmt(p.targetKg) + ' ' + unitName() + '</span></div>' +
    '<div class="progress"><i style="width:' + tPct + '%"></i></div>' +
    '<div class="target-note"><span>起始体重</span><span>已完成 ' + Math.round(tPct) + '%</span></div></div>' +

    (rows ? '<div class="card"><div class="card-head"><h3><span class="dot"></span>记录列表</h3></div>' + rows + '</div>'
      : emptyState('scale', '还没有体重记录', '<button class="btn btn-primary btn-sm" data-action="open-weight">记录第一次</button>'));

  document.getElementById('view-weight').innerHTML = html;
}

function weightChart(ws, fmt) {
  const W = 340, H = 190, P = 26;
  fmt = fmt || function (v) { return v; };
  const vals = ws.map(w => w.value);
  const lo = Math.floor(Math.min.apply(null, vals) - 1);
  const hi = Math.ceil(Math.max.apply(null, vals) + 1);
  const n = vals.length;
  const x = i => n === 1 ? W / 2 : P + i * (W - 2 * P) / (n - 1);
  const y = v => H - P - (v - lo) / (hi - lo) * (H - 2 * P);
  const pts = vals.map((v, i) => x(i) + ',' + y(v)).join(' ');
  const area = 'M' + x(0) + ',' + (H - P) + ' L' + pts.replace(/,/g, ' ') + ' L' + x(n - 1) + ',' + (H - P) + ' Z';
  const grid = [];
  for (let g = 0; g <= 2; g++) {
    const v = lo + (hi - lo) * g / 2;
    grid.push('<line x1="' + P + '" y1="' + y(v) + '" x2="' + (W - P) + '" y2="' + y(v) + '" stroke="#F0F4F1" stroke-width="1"/>' +
      '<text x="' + (P - 8) + '" y="' + (y(v) + 3) + '" text-anchor="end" font-size="9" fill="#98989D">' + fmt(v) + '</text>');
  }
  const dots = vals.map((v, i) =>
    '<circle cx="' + x(i) + '" cy="' + y(v) + '" r="' + (i === n - 1 ? 4 : 2.6) + '" fill="' + (i === n - 1 ? '#147A4C' : '#3DB57C') + '"/>').join('');
  return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none">' +
    '<defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3DB57C" stop-opacity=".35"/><stop offset="1" stop-color="#3DB57C" stop-opacity="0"/></linearGradient></defs>' +
    grid.join('') +
    '<path d="' + area + '" fill="url(#wg)"/>' +
    '<polyline points="' + pts + '" fill="none" stroke="#1D8F59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    dots + '</svg>';
}

/* ================= 支出 ================= */
const CATS = [
  { id: 'food', name: '食材', color: '#3DB57C' },
  { id: 'dine', name: '餐饮', color: '#E8A33D' },
  { id: 'gym', name: '健身', color: '#3A7BD5' },
  { id: 'supp', name: '补剂', color: '#8E6BB5' },
  { id: 'other', name: '其他', color: '#9AA9A1' },
];
function catInfo(id) { return CATS.find(c => c.id === id) || CATS[4]; }

function renderExpense() {
  const mKey = viewMonth;
  const items = state.expenses.filter(e => e.date.slice(0, 7) === mKey).sort((a, b) => (a.date < b.date ? 1 : -1));
  const total = items.reduce((s, e) => s + e.amount, 0);
  const days = items.length;
  const avg = days ? Math.round(total / days) : 0;

  const byCat = {};
  items.forEach(e => { const k = e.category || 'other'; byCat[k] = (byCat[k] || 0) + e.amount; });
  const catRows = CATS.map(c => {
    const v = byCat[c.id] || 0;
    if (!v) return '';
    const pct = Math.round(v / total * 100);
    return '<div class="cat-row"><span class="nm">' + c.name + '</span><div class="track"><i style="width:' + pct + '%;background:' + c.color + '"></i></div><span class="pct">' + pct + '%</span></div>';
  }).join('');

  const grouped = {};
  items.forEach(e => { (grouped[e.date] = grouped[e.date] || []).push(e); });
  const listHtml = Object.keys(grouped).map(d => {
    const rows = grouped[d].map(e => {
      const c = catInfo(e.category);
      return '<div class="list-item"><div class="ic" style="background:' + c.color + '">' + I('coin') + '</div>' +
        '<div class="grow"><div class="nm">' + (esc(e.note) || c.name) + '</div><div class="ds">' + c.name + (e.date === todayKey() ? ' · 今天' : '') + '</div></div>' +
        '<div class="num"><b>¥' + e.amount + '</b></div>' +
        '<button class="del-btn" data-action="del-exp" data-id="' + e.id + '" aria-label="删除">' + I('trash') + '</button></div>';
    }).join('');
    return '<div style="font-size:.75rem;color:var(--text-3);font-weight:700;padding:10px 2px 2px">' + fmtFull(d) + '</div>' + rows;
  }).join('');

  const isCurrent = mKey === todayKey().slice(0, 7);
  const html =
    topbar('支出', '把减脂投入记下来，复盘更清晰', '<button class="icon-btn" data-action="open-expense">' + I('plus') + '</button>') +
    '<div class="month-summary"><div class="l">' + mKey + ' 月支出</div><div class="v">¥' + total.toFixed(0) + '</div>' +
    '<div class="row"><div class="cell"><div class="l">笔数</div><div class="v">' + days + '</div></div>' +
    '<div class="cell"><div class="l">笔均</div><div class="v">¥' + avg + '</div></div>' +
    (isCurrent ? '<div class="cell"><div class="l">今日</div><div class="v">¥' + (state.expenses.filter(e => e.date === todayKey()).reduce((s, e) => s + e.amount, 0)) + '</div></div>' : '') +
    '</div></div>' +
    '<div class="date-switch"><button class="d-btn" data-action="prev-month">' + I('chevL') + '</button>' +
    '<div class="day">' + mKey + '<div class="w">' + (isCurrent ? '本月' : '历史月份') + '</div></div>' +
    '<button class="d-btn" data-action="next-month">' + I('chevR') + '</button>' +
    (isCurrent ? '<span class="today">·</span>' : '<button class="today" data-action="back-month">回本月</button>') +
    '</div>' +
    (total ? '<div class="card"><div class="card-head"><h3><span class="dot"></span>分类占比</h3></div>' + catRows + '</div>' : '') +
    (listHtml ? '<div class="card">' + listHtml + '</div>'
      : emptyState('coin', '这个月还没有支出记录', '<button class="btn btn-primary btn-sm" data-action="open-expense">记一笔</button>'));

  document.getElementById('view-expense').innerHTML = html;
}

/* ================= 设置 ================= */
function renderSettings() {
  const p = state.profile;
  const b = Math.round(bmr(p));
  const t = Math.round(tdee());
  const bud = budget();
  const rawBudget = Math.round(tdee() - p.rate * 7700 / 7);
  const floor = calorieFloor();
  const floored = rawBudget < floor;
  const pt = proteinTarget(), ft = fatTarget(), ct = carbTarget();

  const html =
    topbar('设置', '信息越准确，热量预算越贴合你', '') +
    '<div class="card"><div class="card-head"><h3><span class="dot"></span>个人信息</h3></div>' +
    '<div class="field"><label>称呼</label><input id="p-name" placeholder="如：小明" value="' + esc(p.name) + '"></div>' +
    '<div class="field"><label>性别</label><select id="p-gender">' +
    '<option value="male"' + (p.gender === 'male' ? ' selected' : '') + '>男</option>' +
    '<option value="female"' + (p.gender === 'female' ? ' selected' : '') + '>女</option></select></div>' +
    '<div class="field"><label>体重单位</label><div class="seg">' +
    '<button data-action="set-unit" data-u="kg" class="' + (p.unit !== 'jin' ? 'on' : '') + '">公斤 kg</button>' +
    '<button data-action="set-unit" data-u="jin" class="' + (p.unit === 'jin' ? 'on' : '') + '">斤</button></div>' +
    '<div class="hint">所有体重记录与输入都将使用此单位</div></div>' +
    '<div class="grid-3" style="grid-template-columns:1fr 1fr">' +
    '<div class="field"><label>年龄（岁）</label><input id="p-age" type="number" min="10" value="' + p.age + '"></div>' +
    '<div class="field"><label>身高（cm）</label><input id="p-height" type="number" min="120" value="' + p.heightCm + '"></div>' +
    '</div>' +
    '<div class="grid-3" style="grid-template-columns:1fr 1fr">' +
    '<div class="field"><label>当前体重（' + unitName() + '）</label><input id="p-weight" type="number" step="' + (p.unit === 'jin' ? '1' : '0.1') + '" value="' + wtFmt(p.weightKg) + '"><div class="hint">最近一次称重 ' + wtFmt(latestWeight()) + ' ' + unitName() + '</div></div>' +
    '<div class="field"><label>目标体重（' + unitName() + '）</label><input id="p-target" type="number" step="' + (p.unit === 'jin' ? '1' : '0.1') + '" value="' + wtFmt(p.targetKg) + '"></div>' +
    '</div>' +
    '<div class="field"><label>开始减脂日期</label><input id="p-start" type="date" value="' + p.startDate + '"></div>' +
    '<div class="field"><label>日常活动水平</label><select id="p-activity">' +
    Object.keys(ACT).map(k => '<option value="' + k + '"' + (p.activity === k ? ' selected' : '') + '>' + ACT_NAME[k] + '</option>').join('') +
    '</select></div>' +
    '<div class="field"><label>每周目标减重（kg）</label><select id="p-rate">' +
    [0.25, 0.5, 0.75, 1].map(r => '<option value="' + r + '"' + (p.rate === r ? ' selected' : '') + '>' + r + ' kg/周（' + Math.round(r * 7700 / 7) + ' kcal/日缺口）</option>').join('') +
    '</select><div class="hint">健康减重建议每周 0.25 – 0.75 kg</div></div>' +
    '<button class="btn btn-primary" data-action="save-profile">保存设置</button></div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>你的每日热量预算</h3></div>' +
    '<div class="calc-card">' +
    '<div class="calc-row"><span class="k">基础代谢 BMR</span><span class="v">' + b + ' <small>kcal</small></span></div>' +
    '<div class="calc-row"><span class="k">每日消耗 TDEE</span><span class="v">' + t + ' <small>kcal</small></span></div>' +
    '<div class="calc-row"><span class="k">热量缺口</span><span class="v">' + Math.round(p.rate * 7700 / 7) + ' <small>kcal/日</small></span></div>' +
    '<div class="calc-row total"><span class="k">每日摄入预算</span><span class="v" style="font-size:1.2rem">' + bud + ' <small>kcal</small></span></div>' +
    '</div>' +
    (floored ? '<p class="hint" style="color:#B45309;margin-top:8px;line-height:1.7">按目标缺口计算为 ' + rawBudget + ' kcal，低于安全下限，已按 ' + floor + ' kcal 显示。不建议长期低于基础代谢；孕产、未成年或疾病人群请咨询医生。</p>' : '') +
    '<div class="macro-bar" style="margin-top:12px">' +
    '<div class="macro"><div class="top"><span>蛋白质</span><b>' + pt + 'g</b></div></div>' +
    '<div class="macro"><div class="top"><span>碳水</span><b>' + ct + 'g</b></div></div>' +
    '<div class="macro"><div class="top"><span>脂肪</span><b>' + ft + 'g</b></div></div>' +
    '</div>' +
    '<p style="font-size:.72rem;color:var(--text-3);margin-top:10px;line-height:1.7">计算方式：Mifflin-St Jeor 公式 × 活动系数，按目标缺口扣除。仅供参考，请结合身体感受调整。</p></div>' +

    '<div class="card"><div class="card-head"><h3><span class="dot"></span>数据管理</h3></div>' +
    '<div class="btn-row">' +
    '<button class="btn btn-soft" data-action="export-data">' + I('download') + ' 导出备份</button>' +
    '<button class="btn btn-soft" data-action="import-data">' + I('upload') + ' 导入数据</button>' +
    '</div>' +
    '<div style="height:10px"></div>' +
    '<button class="btn btn-danger" data-action="clear-data">' + I('trash') + ' 清空全部数据</button>' +
    '<input id="import-file" type="file" accept=".json,application/json" class="hidden"></div>' +

    '<div class="privacy-note">' + I('shield') +
    '<span><strong>隐私保障</strong>：所有数据仅保存在你的手机浏览器本地，不上传、无账号，也不使用任何 API Key。卸载 App 或清除浏览器数据才会丢失，记得定期导出备份。</span></div>' +
    '<p style="text-align:center;font-size:.72rem;color:var(--text-3);padding-bottom:10px">HelloFit · 为减脂路上的你设计</p>';

  document.getElementById('view-settings').innerHTML = html;
}

function readProfile() {
  const v = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  const clamp = (n, lo, hi, def) => {
    const x = Number(n);
    return isFinite(x) ? Math.min(hi, Math.max(lo, x)) : def;
  };
  state.profile.name = String(v('p-name') || '').slice(0, 24);
  state.profile.gender = v('p-gender') === 'male' ? 'male' : 'female';
  state.profile.age = clamp(v('p-age'), 10, 100, 25);
  state.profile.heightCm = clamp(v('p-height'), 100, 250, 165);
  state.profile.weightKg = clamp(wtParse(Number(v('p-weight')) || (state.profile.unit === 'jin' ? 110 : 55)), 20, 300, 55);
  state.profile.targetKg = clamp(wtParse(Number(v('p-target')) || (state.profile.unit === 'jin' ? 100 : 50)), 20, 300, 50);
  state.profile.startDate = /^\d{4}-\d{2}-\d{2}$/.test(v('p-start')) ? v('p-start') : todayKey();
  state.profile.activity = ACT[v('p-activity')] ? v('p-activity') : 'light';
  state.profile.rate = clamp(v('p-rate'), 0.25, 1, 0.5);
  if (state.meta) state.meta.sample = false;
  save();
}

/* ================= 数据导入导出 ================= */
function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'HelloFit备份_' + todayKey() + '.json';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 500);
  toast('已导出备份');
}

function toNum(v, min, max, def) {
  const n = Number(v);
  if (!isFinite(n)) return def;
  return Math.min(max, Math.max(min, n));
}
function toStr(v, max) {
  return String(v == null ? '' : v).slice(0, max);
}
function toDate(v, def) {
  return /^\d{4}-\d{2}-\d{2}$/.test(String(v || '')) ? String(v) : def;
}

// 导入文件是不可信输入：只接受白名单字段，数值/日期/枚举全部重新校验
function normalizeImportedState(raw) {
  const base = defaultState();
  const p = raw.profile || {};
  const profile = Object.assign({}, DEF_PROFILE, {
    name: toStr(p.name, 24),
    gender: p.gender === 'male' ? 'male' : 'female',
    age: toNum(p.age, 10, 100, DEF_PROFILE.age),
    heightCm: toNum(p.heightCm, 100, 250, DEF_PROFILE.heightCm),
    weightKg: toNum(p.weightKg, 20, 300, DEF_PROFILE.weightKg),
    targetKg: toNum(p.targetKg, 20, 300, DEF_PROFILE.targetKg),
    activity: ACT[p.activity] ? p.activity : 'light',
    rate: toNum(p.rate, 0.25, 1, 0.5),
    startDate: toDate(p.startDate, base.profile.startDate),
    unit: p.unit === 'jin' ? 'jin' : 'kg',
    avatar: safeAvatar(p.avatar),
  });
  const list = v => Array.isArray(v) ? v.slice(0, 5000).filter(x => x && typeof x === 'object') : [];
  const meals = list(raw.meals).map(m => ({
    id: toStr(m.id, 40) || uid(),
    date: toDate(m.date, base.profile.startDate),
    type: ['breakfast', 'lunch', 'dinner', 'snack'].indexOf(m.type) !== -1 ? m.type : 'snack',
    name: toStr(m.name, 60),
    kcal: toNum(m.kcal, 0, 5000, 0),
    p: toNum(m.p, 0, 500, 0),
    c: toNum(m.c, 0, 500, 0),
    f: toNum(m.f, 0, 500, 0),
    g: toNum(m.g, 1, 5000, 100),
  }));
  const exercises = list(raw.exercises).map(x => ({
    id: toStr(x.id, 40) || uid(),
    date: toDate(x.date, base.profile.startDate),
    name: toStr(x.name, 60),
    minutes: toNum(x.minutes, 1, 1440, 30),
    met: x.met == null ? null : toNum(x.met, 0, 30, null),
    kcal: toNum(x.kcal, 0, 10000, 0),
  }));
  const weights = list(raw.weights).map(x => ({
    id: toStr(x.id, 40) || uid(),
    date: toDate(x.date, base.profile.startDate),
    value: toNum(x.value, 20, 300, DEF_PROFILE.weightKg),
  }));
  const expenses = list(raw.expenses).map(x => ({
    id: toStr(x.id, 40) || uid(),
    date: toDate(x.date, base.profile.startDate),
    amount: toNum(x.amount, 0, 1000000, 0),
    category: CATS.some(c => c.id === x.category) ? x.category : 'other',
    note: toStr(x.note, 30),
  }));
  const customFoods = list(raw.customFoods).map(x => ({
    n: toStr(x.n, 60),
    k: toNum(x.k, 0, 5000, 0),
    p: toNum(x.p, 0, 500, 0),
    c: toNum(x.c, 0, 500, 0),
    f: toNum(x.f, 0, 500, 0),
  })).filter(x => x.n);
  return {
    version: 1,
    profile: profile,
    customFoods: customFoods,
    meals: meals,
    exercises: exercises,
    weights: weights,
    expenses: expenses,
    meta: { sample: false, onboarded: !!(raw.meta && raw.meta.onboarded) },
  };
}

function importData(file) {
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { toast('导入失败：文件超过 2MB'); return; }
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const j = JSON.parse(reader.result);
      if (!j || typeof j !== 'object' || !j.profile || typeof j.profile !== 'object') throw new Error('bad');
      state = normalizeImportedState(j);
      save();
      viewDate = todayKey();
      viewMonth = todayKey().slice(0, 7);
      toast('导入成功');
      showView('dashboard');
    } catch (e) { toast('导入失败：文件格式不正确'); }
  };
  reader.onerror = () => toast('导入失败：读取文件出错');
  reader.readAsText(file);
}

function clearData() {
  state = defaultState();
  save();
  viewDate = todayKey();
  viewMonth = todayKey().slice(0, 7);
  toast('已清空全部数据');
  showView('dashboard');
}

/* ================= 事件 ================= */
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

document.addEventListener('click', function (e) {
  const t = e.target.closest('[data-action]');
  if (!t) return;
  const act = t.dataset.action;

  if (act === 'nav') { showView(t.dataset.view); }
  else if (act === 'goto-food') { showView('food'); }
  else if (act === 'goto-exercise') { showView('exercise'); }

  else if (act === 'prev-day') { viewDate = addDays(viewDate, -1); renderView(view); }
  else if (act === 'next-day') { viewDate = addDays(viewDate, 1); renderView(view); }
  else if (act === 'back-today') { viewDate = todayKey(); renderView(view); }
  else if (act === 'prev-month') { viewMonth = monthOffset(viewMonth, -1); renderExpense(); }
  else if (act === 'next-month') { viewMonth = monthOffset(viewMonth, 1); renderExpense(); }
  else if (act === 'back-month') { viewMonth = todayKey().slice(0, 7); renderExpense(); }

  else if (act === 'add-meal') { openFoodModal(t.dataset.type); }
  else if (act === 'food-tab') {
    modalState.phase = t.dataset.tab; modalState.food = null; modalState.foodIdx = null;
    document.querySelectorAll('[data-action="food-tab"]').forEach(b => b.classList.toggle('on', b === t));
    renderFoodModalBody();
  }
  else if (act === 'pick-food') {
    const i = Number(t.dataset.idx);
    modalState.food = FOOD_DB[i]; modalState.foodIdx = i; modalState.grams = 100;
    renderFoodModalBody();
  }
  else if (act === 'pick-custom') {
    modalState.food = state.customFoods[Number(t.dataset.idx)]; modalState.grams = 100;
    renderFoodModalBody();
  }
  else if (act === 'clear-q') {
    modalState.q = '';
    modalState.food = null;
    modalState.foodIdx = null;
    renderFoodModalBody();
    const q = document.getElementById('food-q');
    if (q) q.focus();
  }
  else if (act === 'grams') {
    modalState.grams = Math.max(1, (modalState.grams || 100) + Number(t.dataset.d));
    renderFoodModalBody();
  }
  else if (act === 'confirm-food') {
    if (!modalState.food) return;
    const f = modalState.food, g = modalState.grams;
    addMealRecord(modalState.type, f.n, Math.round(f.k * g / 100), Math.round(f.p * g / 100), Math.round(f.c * g / 100), Math.round(f.f * g / 100), g);
    closeModal(); toast('已记录：' + f.n); renderView(view);
  }
  else if (act === 'confirm-custom') { modalState.phase = 'custom'; document.querySelectorAll('[data-action="food-tab"]').forEach(b => b.classList.toggle('on', b.dataset.tab === 'custom')); renderFoodModalBody(); }
  else if (act === 'c-field') {
    modalState.cField = t.dataset.f;
    document.querySelectorAll('[data-action="c-field"]').forEach(b => b.classList.toggle('on', b === t));
  }
  else if (act === 'confirm-custom-food') {
    const c = modalState.custom || { n: '', k: 100, p: 0, c: 0, f: 0 };
    if (!c.n) { toast('请填写食物名称'); return; }
    const food = { n: c.n, k: c.k, p: c.p, c: c.c, f: c.f };
    state.customFoods.push(food);
    save();
    const g = modalState.grams;
    addMealRecord(modalState.type, food.n, Math.round(food.k * g / 100), Math.round(food.p * g / 100), Math.round(food.c * g / 100), Math.round(food.f * g / 100), g);
    closeModal(); toast('已记录：' + food.n); renderView(view);
  }

  else if (act === 'open-exercise') { openExerciseModal(); }
  else if (act === 'ex-tab') {
    modalState.phase = t.dataset.tab; modalState.ex = null; modalState.exIdx = null;
    document.querySelectorAll('[data-action="ex-tab"]').forEach(b => b.classList.toggle('on', b === t));
    renderExerciseModalBody();
  }
  else if (act === 'pick-ex') {
    const i = Number(t.dataset.idx);
    modalState.ex = EXERCISE_DB[i]; modalState.exIdx = i;
    renderExerciseModalBody();
  }
  else if (act === 'ex-min') {
    modalState.minutes = Math.max(1, (modalState.minutes || 30) + Number(t.dataset.d));
    renderExerciseModalBody();
  }
  else if (act === 'confirm-ex') {
    if (!modalState.ex) return;
    const ex = modalState.ex;
    const kg = latestWeight();
    const kcal = Math.round(ex.met * kg * modalState.minutes / 60);
    state.exercises.push({ id: uid(), date: viewDate, name: ex.n, minutes: modalState.minutes, met: ex.met, kcal: kcal });
    save(); closeModal(); toast('已记录：' + ex.n); renderView(view);
  }
  else if (act === 'confirm-custom-ex') {
    const c = modalState.custom || {};
    if (!c.n) { toast('请填写运动名称'); return; }
    state.exercises.push({ id: uid(), date: viewDate, name: c.n, minutes: modalState.minutes, kcal: Math.round(Number(c.kcal) || 0), met: null });
    save(); closeModal(); toast('已记录：' + c.n); renderView(view);
  }

  else if (act === 'open-weight') { openWeightModal(); }
  else if (act === 'set-unit') {
    state.profile.unit = t.dataset.u === 'jin' ? 'jin' : 'kg';
    save(); toast('体重单位已切换为' + unitName()); renderSettings();
  }
  else if (act === 'confirm-weight') {
    const raw = Number(document.getElementById('w-value').value);
    const v = wtParse(raw);
    const d = document.getElementById('w-date').value;
    if (!v || v < 20 || v > 300) { toast('请输入有效体重'); return; }
    const old = state.weights.find(x => x.date === d);
    if (old) { old.value = Math.round(v * 10) / 10; }
    else { state.weights.push({ id: uid(), date: d, value: Math.round(v * 10) / 10 }); }
    save(); closeModal(); toast('已记录体重'); renderView(view);
  }

  else if (act === 'open-expense') { openExpenseModal(); }
  else if (act === 'exp-cat') {
    modalState.cat = t.dataset.cat;
    document.querySelectorAll('[data-action="exp-cat"]').forEach(b => b.classList.toggle('on', b === t));
  }
  else if (act === 'confirm-expense') {
    const v = Number(document.getElementById('e-amount').value);
    if (!v || v <= 0) { toast('请输入金额'); return; }
    const note = document.getElementById('e-note').value.trim();
    state.expenses.push({ id: uid(), date: todayKey(), amount: Math.round(v * 100) / 100, category: modalState.cat || 'other', note: note });
    save(); closeModal(); toast('已记一笔'); renderView(view);
  }

  else if (act === 'del-meal') { state.meals = state.meals.filter(x => x.id !== t.dataset.id); save(); toast('已删除'); renderView(view); }
  else if (act === 'del-ex') { state.exercises = state.exercises.filter(x => x.id !== t.dataset.id); save(); toast('已删除'); renderView(view); }
  else if (act === 'del-weight') { state.weights = state.weights.filter(x => x.id !== t.dataset.id); save(); toast('已删除'); renderView(view); }
  else if (act === 'del-exp') { state.expenses = state.expenses.filter(x => x.id !== t.dataset.id); save(); toast('已删除'); renderView(view); }

  else if (act === 'save-profile') { readProfile(); toast('设置已保存，预算已更新'); renderView(view); }
  else if (act === 'export-data') { exportData(); }
  else if (act === 'import-data') { document.getElementById('import-file').click(); }
  else if (act === 'clear-data') { openClearConfirm(); }

  else if (act === 'close-modal') { closeModal(); }
  else if (act === 'avatar-click') { openAvatarModal(); }
  else if (act === 'avatar-choose') { const f = document.getElementById('avatar-file'); if (f) f.click(); }
  else if (act === 'avatar-reset') { state.profile.avatar = ''; save(); closeModal(); toast('已恢复默认头像'); renderView(view); }
  else if (act === 'ob-unit') {
    document.querySelectorAll('[data-action="ob-unit"]').forEach(b => b.classList.toggle('on', b === t));
  }
  else if (act === 'onboard-done') { finishOnboarding(); }
});

document.addEventListener('change', function (e) {
  if (e.target && e.target.files && e.target.files[0]) {
    if (e.target.id === 'import-file') {
      importData(e.target.files[0]);
    } else if (e.target.id === 'avatar-file') {
      handleAvatarFile(e.target.files[0]);
    }
    e.target.value = '';
  }
});

function handleAvatarFile(file) {
  if (!file.type || file.type.indexOf('image/') !== 0) { toast('请选择图片文件'); return; }
  const reader = new FileReader();
  reader.onload = function (ev2) {
    const img = new Image();
    img.onload = function () {
      const size = 256;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      const side = Math.min(img.width, img.height);
      const sx = (img.width - side) / 2, sy = (img.height - side) / 2;
      ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size);
      state.profile.avatar = canvas.toDataURL('image/jpeg', 0.85);
      save(); closeModal(); toast('头像已更新'); renderView(view);
    };
    img.src = ev2.target.result;
  };
  reader.readAsDataURL(file);
}

function openClearConfirm() {
  const html =
    '<div class="sheet-title">清空全部数据</div>' +
    '<div class="privacy-note" style="align-items:flex-start">' + I('shield') +
    '<span>将删除所有饮食、运动、体重、支出记录和自定义食物，此操作<b>不可恢复</b>。建议先导出备份。</span></div>' +
    '<div class="btn-row">' +
    '<button class="btn btn-soft" data-action="close-modal">取消</button>' +
    '<button class="btn btn-danger" data-action="confirm-clear">确认清空</button>' +
    '</div>';
  modalState = { confirmClear: true };
  openModal(html);
}

document.addEventListener('click', function (e) {
  const t = e.target.closest('[data-action="confirm-clear"]');
  if (!t) return;
  closeModal();
  clearData();
});

function openAvatarModal() {
  const html =
    '<div class="sheet-title">更换头像</div>' +
    '<div style="display:grid;place-items:center;margin-bottom:20px">' + avatarHTML(100, false) + '</div>' +
    '<button class="btn btn-primary" data-action="avatar-choose">' + I('camera') + ' 从相册选择</button>' +
    '<button class="btn btn-ghost" data-action="avatar-reset" style="margin-top:10px">恢复默认头像</button>' +
    '<button class="btn btn-ghost" data-action="close-modal" style="margin-top:10px">取消</button>';
  openModal(html);
}

function openWeightModal() {
  const d = todayKey();
  const html =
    '<div class="sheet-title">记录体重</div>' +
    '<div class="field"><label>日期</label><input id="w-date" type="date" max="' + todayKey() + '" value="' + d + '"></div>' +
    '<div class="field"><label>体重（' + unitName() + '）</label><input id="w-value" type="number" step="' + (state.profile.unit === 'jin' ? '1' : '0.1') + '" min="10" max="600" placeholder="如：' + wtFmt(latestWeight()) + '" inputmode="decimal" autofocus></div>' +
    '<button class="btn btn-primary" data-action="confirm-weight">保存</button>' +
    '<button class="btn btn-ghost" data-action="close-modal" style="margin-top:10px">取消</button>';
  openModal(html);
}

function openExpenseModal() {
  const catRows = CATS.map(c =>
    '<button data-action="exp-cat" data-cat="' + c.id + '"' + (c.id === 'other' ? ' class="on"' : '') + '><span class="tag" style="background:' + c.color + '20;color:' + c.color + '">' + c.name + '</span></button>').join('');
  const html =
    '<div class="sheet-title">记一笔支出</div>' +
    '<div class="field"><label>金额（元）</label><input id="e-amount" type="number" step="0.01" min="0" placeholder="0.00" inputmode="decimal" autofocus></div>' +
    '<div class="field"><label>分类</label><div class="chip-row">' + catRows + '</div></div>' +
    '<div class="field"><label>备注</label><input id="e-note" placeholder="如：健身房月卡、鸡胸肉" maxlength="30"></div>' +
    '<button class="btn btn-primary" data-action="confirm-expense">保存</button>' +
    '<button class="btn btn-ghost" data-action="close-modal" style="margin-top:10px">取消</button>';
  openModal(html);
}

function monthOffset(m, n) {
  const [y, mm] = m.split('-').map(Number);
  const d = new Date(y, mm - 1 + n, 1);
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

/* ================= 启动 ================= */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(function () {});
}
showView('dashboard');
if (!(state.meta && state.meta.onboarded)) renderOnboarding();
})();
