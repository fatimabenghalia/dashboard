/* Nova — Modern White E-Commerce Dashboard */

const PAGE_META = {
  dashboard: { title: 'Dashboard', subtitle: 'Your store overview at a glance.', action: 'Export Report' },
  products:  { title: 'Products',  subtitle: 'Manage your product catalog.', action: 'Add Product' },
  orders:    { title: 'Orders',    subtitle: 'Track and fulfill customer orders.', action: 'New Order' },
  customers: { title: 'Customers', subtitle: 'View and manage your customer base.', action: 'Add Customer' },
  analytics: { title: 'Analytics', subtitle: 'Deep insights into store performance.', action: 'Download Data' },
  reviews:   { title: 'Reviews',   subtitle: 'Monitor customer feedback and ratings.', action: 'Moderate All' },
  social:    { title: 'Social Media', subtitle: 'Manage channels & preview mobile experience.', action: 'New Post' },
}

const socialPlatforms = [
  { name: 'Instagram', handle: '@novastore', followers: '48.2K', growth: '+12%', engagement: '4.8%', posts: 342, color: '#E1306C', icon: 'IG' },
  { name: 'Facebook', handle: '@novastore', followers: '32.1K', growth: '+6%', engagement: '2.1%', posts: 218, color: '#1877F2', icon: 'FB' },
  { name: 'TikTok', handle: '@novastore', followers: '91.5K', growth: '+28%', engagement: '8.4%', posts: 156, color: '#1f3b57', icon: 'TT' },
  { name: 'Pinterest', handle: 'Nova Store', followers: '18.7K', growth: '+9%', engagement: '3.2%', posts: 489, color: '#E60023', icon: 'PI' },
]

const socialPosts = [
  { platform: 'Instagram', text: 'New Silk Evening Gown collection — luxury redefined ✨', likes: 2840, comments: 186, date: '2h ago', color: '#E1306C' },
  { platform: 'TikTok', text: 'Behind the scenes: crafting pearl earrings', likes: 12400, comments: 542, date: '5h ago', color: '#1f3b57' },
  { platform: 'Facebook', text: 'Summer sale — 20% off selected items this weekend', likes: 890, comments: 67, date: '1d ago', color: '#1877F2' },
  { platform: 'Pinterest', text: '10 ways to style your cashmere scarf', likes: 1560, comments: 34, date: '2d ago', color: '#E60023' },
]

const products = [
  { id: 'PRD-001', name: 'Silk Evening Gown', category: 'Fashion', price: 289, stock: 42, sold: 128, status: 'active', color: '#1e40af' },
  { id: 'PRD-002', name: 'Pearl Drop Earrings', category: 'Jewelry', price: 145, stock: 87, sold: 256, status: 'active', color: '#2563eb' },
  { id: 'PRD-003', name: 'Cashmere Wrap Scarf', category: 'Accessories', price: 98, stock: 15, sold: 89, status: 'low', color: '#60a5fa' },
  { id: 'PRD-004', name: 'Leather Tote Bag', category: 'Bags', price: 320, stock: 31, sold: 74, status: 'active', color: '#1d4ed8' },
  { id: 'PRD-005', name: 'Crystal Perfume Set', category: 'Beauty', price: 175, stock: 0, sold: 312, status: 'out', color: '#93c5fd' },
  { id: 'PRD-006', name: 'Velvet Blazer', category: 'Fashion', price: 410, stock: 22, sold: 45, status: 'active', color: '#3b82f6' },
  { id: 'PRD-007', name: 'Gold Chain Necklace', category: 'Jewelry', price: 520, stock: 18, sold: 67, status: 'active', color: '#1e3a8a' },
  { id: 'PRD-008', name: 'Satin Sleep Mask', category: 'Beauty', price: 38, stock: 120, sold: 445, status: 'active', color: '#60a5fa' },
]

const orders = [
  { id: 'ORD-48291', customer: 'Sophia Laurent', email: 'sophia@email.com', items: 3, total: 754, date: '8 Jun 2026', status: 'delivered', payment: 'Paid' },
  { id: 'ORD-48290', customer: 'James Mitchell', email: 'james@email.com', items: 1, total: 289, date: '8 Jun 2026', status: 'shipped', payment: 'Paid' },
  { id: 'ORD-48289', customer: 'Emma Richardson', email: 'emma@email.com', items: 2, total: 465, date: '7 Jun 2026', status: 'processing', payment: 'Paid' },
  { id: 'ORD-48288', customer: 'Oliver Chen', email: 'oliver@email.com', items: 4, total: 1120, date: '7 Jun 2026', status: 'pending', payment: 'Pending' },
  { id: 'ORD-48287', customer: 'Isabella Rossi', email: 'isabella@email.com', items: 1, total: 145, date: '6 Jun 2026', status: 'delivered', payment: 'Paid' },
  { id: 'ORD-48286', customer: 'William Hayes', email: 'william@email.com', items: 2, total: 418, date: '6 Jun 2026', status: 'cancelled', payment: 'Refunded' },
  { id: 'ORD-48285', customer: 'Charlotte Webb', email: 'charlotte@email.com', items: 5, total: 1380, date: '5 Jun 2026', status: 'delivered', payment: 'Paid' },
  { id: 'ORD-48284', customer: 'Lucas Anderson', email: 'lucas@email.com', items: 1, total: 98, date: '5 Jun 2026', status: 'shipped', payment: 'Paid' },
]

const customers = [
  { name: 'Sophia Laurent', email: 'sophia@email.com', orders: 24, spent: 6840, joined: 'Jan 2024', tier: 'Platinum', initials: 'SL' },
  { name: 'James Mitchell', email: 'james@email.com', orders: 18, spent: 4520, joined: 'Mar 2024', tier: 'Gold', initials: 'JM' },
  { name: 'Emma Richardson', email: 'emma@email.com', orders: 31, spent: 9120, joined: 'Nov 2023', tier: 'Platinum', initials: 'ER' },
  { name: 'Oliver Chen', email: 'oliver@email.com', orders: 12, spent: 3280, joined: 'Jun 2024', tier: 'Gold', initials: 'OC' },
  { name: 'Isabella Rossi', email: 'isabella@email.com', orders: 9, spent: 2140, joined: 'Sep 2024', tier: 'Silver', initials: 'IR' },
  { name: 'Charlotte Webb', email: 'charlotte@email.com', orders: 42, spent: 12450, joined: 'Aug 2023', tier: 'Platinum', initials: 'CW' },
]

const reviews = [
  { id: 'REV-301', customer: 'Sophia Laurent', product: 'Silk Evening Gown', rating: 5, comment: 'Absolutely stunning quality. The fabric feels luxurious and the fit is perfect.', date: '7 Jun 2026', status: 'approved' },
  { id: 'REV-300', customer: 'James Mitchell', product: 'Pearl Drop Earrings', rating: 4, comment: 'Beautiful earrings, slightly smaller than expected but still elegant.', date: '6 Jun 2026', status: 'approved' },
  { id: 'REV-299', customer: 'Emma Richardson', product: 'Leather Tote Bag', rating: 5, comment: 'Best bag I have ever owned. Craftsmanship is exceptional.', date: '5 Jun 2026', status: 'approved' },
  { id: 'REV-298', customer: 'Oliver Chen', product: 'Crystal Perfume Set', rating: 3, comment: 'Scents are nice but packaging arrived slightly damaged.', date: '4 Jun 2026', status: 'pending' },
  { id: 'REV-297', customer: 'Isabella Rossi', product: 'Cashmere Wrap Scarf', rating: 5, comment: 'So soft and warm. Will definitely buy again in more colors.', date: '3 Jun 2026', status: 'approved' },
  { id: 'REV-296', customer: 'William Hayes', product: 'Velvet Blazer', rating: 2, comment: 'Sizing runs small. Had to return for a larger size.', date: '2 Jun 2026', status: 'pending' },
]

const monthlySales = [
  { month: 'Jan', sales: 38, orders: 120 },
  { month: 'Feb', sales: 52, orders: 145 },
  { month: 'Mar', sales: 47, orders: 132 },
  { month: 'Apr', sales: 68, orders: 198 },
  { month: 'May', sales: 61, orders: 175 },
  { month: 'Jun', sales: 78, orders: 224 },
  { month: 'Jul', sales: 72, orders: 210 },
  { month: 'Aug', sales: 85, orders: 248 },
]

const weeklySales = [
  { month: 'Mon', sales: 42, orders: 18 },
  { month: 'Tue', sales: 58, orders: 24 },
  { month: 'Wed', sales: 51, orders: 21 },
  { month: 'Thu', sales: 76, orders: 32 },
  { month: 'Fri', sales: 69, orders: 29 },
  { month: 'Sat', sales: 94, orders: 41 },
  { month: 'Sun', sales: 82, orders: 36 },
]

const categorySales = [
  { label: 'Fashion', pct: 32, color: '#1f3b57' },
  { label: 'Jewelry', pct: 24, color: '#355c80' },
  { label: 'Bags', pct: 18, color: '#4d769d' },
  { label: 'Beauty', pct: 16, color: '#7aaedc' },
  { label: 'Accessories', pct: 10, color: '#a6ccee' },
]

const trafficSources = [
  { source: 'Organic Search', visits: 12400, pct: 38 },
  { source: 'Social Media', visits: 8200, pct: 25 },
  { source: 'Direct', visits: 6800, pct: 21 },
  { source: 'Email', visits: 3400, pct: 10 },
  { source: 'Referral', visits: 1900, pct: 6 },
]

let currentPage = 'dashboard'
const connectedPlatforms = new Set(socialPlatforms.map(platform => platform.name))
const dialogSubmitHandlers = new WeakMap()
let storeSettings = { name: 'Nova Store', email: 'hello@novastore.com' }
let toastTimer

/* ── Helpers ─────────────────────────────────────────── */
function fmt(n) { return '$' + n.toLocaleString() }

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char])
}

function showToast(message) {
  const region = document.getElementById('toastRegion')
  region.textContent = message
  region.classList.add('visible')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => region.classList.remove('visible'), 2800)
}

function openDialog(title, content, onSubmit) {
  let dialog = document.getElementById('appDialog')
  if (!dialog) {
    document.body.insertAdjacentHTML('beforeend', '<dialog id="appDialog" class="app-dialog"><form class="dialog-form"><div class="dialog-heading"><h2></h2><button type="button" class="dialog-close" aria-label="Close dialog">×</button></div><div class="dialog-content"></div><div class="dialog-actions"><button type="button" class="btn-ghost dialog-cancel">Cancel</button><button type="submit" class="btn-primary dialog-submit">Save changes</button></div></form></dialog>')
    dialog = document.getElementById('appDialog')
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close())
    dialog.querySelector('.dialog-cancel').addEventListener('click', () => dialog.close())
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close()
    })
    dialog.querySelector('form').addEventListener('submit', event => {
      event.preventDefault()
      const submitHandler = dialogSubmitHandlers.get(dialog)
      if (submitHandler && submitHandler(new FormData(event.currentTarget)) === false) return
      dialog.close()
    })
  }
  dialogSubmitHandlers.set(dialog, onSubmit)
  dialog.querySelector('h2').textContent = title
  dialog.querySelector('.dialog-content').innerHTML = content
  dialog.querySelector('.dialog-submit').hidden = !onSubmit
  dialog.querySelector('.dialog-cancel').textContent = onSubmit ? 'Cancel' : 'Close'
  dialog.showModal()
  const firstInput = dialog.querySelector('input, textarea, select')
  if (firstInput) firstInput.focus()
}

function stars(n) {
  return Array.from({ length: 5 }, (_, i) =>
    `<span class="star ${i < n ? 'filled' : ''}">★</span>`
  ).join('')
}

function statusBadge(status) {
  const labels = { active: 'Active', low: 'Low Stock', out: 'Out of Stock', delivered: 'Delivered', shipped: 'Shipped', processing: 'Processing', pending: 'Pending', cancelled: 'Cancelled', approved: 'Approved', rejected: 'Rejected' }
  return `<span class="badge ${status}">${labels[status] || status}</span>`
}

function tierBadge(tier) {
  const cls = tier.toLowerCase()
  return `<span class="badge tier-${cls}">${tier}</span>`
}

function productThumb(color, name) {
  const initials = escapeHTML(name.split(' ').map(w => w[0]).join('').slice(0, 2))
  return `<div class="product-thumb" style="background:linear-gradient(135deg,${color},${color}88)">${initials}</div>`
}

/* ── Charts ──────────────────────────────────────────── */
function buildLineChart(data, svgId, labelsId) {
  const svg = document.getElementById(svgId)
  const labels = document.getElementById(labelsId)
  if (!svg) return

  const W = 600, H = 220, padX = 58, padY = 26
  const chartH = H - padY * 2
  const max = Math.max(...data.map(d => d.sales))
  const step = (W - padX * 2) / (data.length - 1)

  const points = data.map((d, i) => ({
    x: padX + i * step,
    y: padY + chartH - (d.sales / max) * chartH,
  }))

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ')
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${H - padY} L ${points[0].x} ${H - padY} Z`
  const uid = svgId.replace(/\W/g, '')

  svg.innerHTML = `
    <defs>
      <linearGradient id="areaGrad${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#315efb" stop-opacity="0.16"/>
        <stop offset="100%" stop-color="#315efb" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="lineGrad${uid}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#315efb"/>
        <stop offset="100%" stop-color="#89a2ff"/>
      </linearGradient>
    </defs>
    ${[0, 0.25, 0.5, 0.75, 1].map(t => {
      const y = padY + chartH * (1 - t)
      return `<line x1="${padX}" y1="${y}" x2="${W - padX}" y2="${y}" stroke="#e5e9f0" stroke-width="1" stroke-dasharray="4 4"/><text x="${padX - 9}" y="${y + 4}" text-anchor="end" font-family="Inter, sans-serif" font-size="10" fill="#667085">$${Math.round(max * t)}k</text>`
    }).join('')}
    <path d="${areaPath}" fill="url(#areaGrad${uid})"/>
    <path d="${linePath}" fill="none" stroke="url(#lineGrad${uid})" stroke-width="2.5" stroke-linecap="round"/>
    ${points.map((p, i) => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="#fff" stroke="#315efb" stroke-width="2"><title>${data[i].month}: $${data[i].sales}k revenue</title></circle>`).join('')}
  `
  svg.setAttribute('aria-label', `Revenue trend: ${data.map(d => `${d.month} $${d.sales} thousand`).join(', ')}`)
  if (labels) labels.innerHTML = data.map(d => `<span>${d.month}</span>`).join('')
}

function buildDonut(data, svgId, legendId) {
  const svg = document.getElementById(svgId)
  const legend = document.getElementById(legendId)
  if (!svg) return

  const cx = 100, cy = 100, r = 70, sw = 22
  let cumulative = 0

  svg.innerHTML = data.map(seg => {
    const start = (cumulative / 100) * 2 * Math.PI - Math.PI / 2
    const end = ((cumulative + seg.pct) / 100) * 2 * Math.PI - Math.PI / 2
    cumulative += seg.pct
    const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start)
    const x2 = cx + r * Math.cos(end), y2 = cy + r * Math.sin(end)
    return `<path d="M ${x1} ${y1} A ${r} ${r} 0 ${seg.pct > 50 ? 1 : 0} 1 ${x2} ${y2}" fill="none" stroke="${seg.color}" stroke-width="${sw}"/>`
  }).join('') + `
    <text x="${cx}" y="${cy - 4}" text-anchor="middle" font-family="Inter, sans-serif" font-size="22" font-weight="700" fill="#111111">100%</text>
    <text x="${cx}" y="${cy + 16}" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#8e8e93">Sales</text>`
  svg.setAttribute('role', 'img')
  svg.setAttribute('aria-label', `Sales by category: ${data.map(segment => `${segment.label} ${segment.pct}%`).join(', ')}`)

  if (legend) legend.innerHTML = data.map(c => `
    <li><span class="legend-left"><span class="legend-dot" style="background:${c.color}"></span>${c.label}</span><span class="legend-pct">${c.pct}%</span></li>
  `).join('')
}

function buildBarChart(data, containerId) {
  const el = document.getElementById(containerId)
  if (!el) return
  const max = Math.max(...data.map(d => d.visits))
  el.innerHTML = data.map(d => `
    <div class="h-bar-row">
      <span class="h-bar-label">${d.source}</span>
      <div class="h-bar-track"><div class="h-bar-fill" style="width:${(d.visits / max) * 100}%"></div></div>
      <span class="h-bar-value">${d.pct}%</span>
    </div>
  `).join('')
}

function field(label, name, value = '', type = 'text', required = true) {
  const numericAttrs = type === 'number' ? `min="0" ${name === 'price' || name === 'total' ? 'step="0.01"' : 'step="1"'}` : ''
  return `<label class="form-field">${label}<input name="${name}" type="${type}" value="${escapeHTML(value)}" ${numericAttrs} ${required ? 'required' : ''}></label>`
}

function openEditor(type, item) {
  const isEdit = Boolean(item)
  const title = `${isEdit ? 'Edit' : 'Add'} ${type}`
  let fields = ''
  if (type === 'Product') {
    fields = `${field('Product name', 'name', item?.name || '')}${field('Category', 'category', item?.category || '')}<div class="form-row">${field('Price ($)', 'price', item ? item.price : '', 'number')}${field('Stock', 'stock', item ? item.stock : '', 'number')}</div>`
  } else if (type === 'Customer') {
    fields = `${field('Full name', 'name')}${field('Email address', 'email', '', 'email')}`
  } else if (type === 'Order') {
    fields = `<label class="form-field">Customer<select name="customer" required>${customers.map(customer => `<option value="${escapeHTML(customer.name)}">${escapeHTML(customer.name)}</option>`).join('')}</select></label>${field('Order total ($)', 'total', '', 'number')}${field('Number of items', 'items', '1', 'number')}`
  } else if (type === 'Social post') {
    fields = `<label class="form-field">Channel<select name="platform">${socialPlatforms.map(platform => `<option>${escapeHTML(platform.name)}</option>`).join('')}</select></label><label class="form-field">Post content<textarea name="text" rows="4" required></textarea></label>`
  }

  openDialog(title, fields, form => {
    const values = Object.fromEntries(form.entries())
    if (type === 'Product') {
      const product = {
        id: item?.id || `PRD-${String(products.length + 1).padStart(3, '0')}`,
        name: values.name.trim(), category: values.category.trim(), price: Number(values.price),
        stock: Number(values.stock), sold: item?.sold || 0, status: Number(values.stock) === 0 ? 'out' : Number(values.stock) <= 15 ? 'low' : 'active',
        color: item?.color || '#355c80',
      }
      if (item) Object.assign(item, product)
      else products.unshift(product)
    } else if (type === 'Customer') {
      customers.unshift({ name: values.name.trim(), email: values.email.trim(), orders: 0, spent: 0, joined: 'Jun 2026', tier: 'Silver', initials: values.name.trim().split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase() })
    } else if (type === 'Order') {
      const customer = customers.find(entry => entry.name === values.customer)
      orders.unshift({ id: `ORD-${48300 + orders.length}`, customer: values.customer, email: customer?.email || '', items: Number(values.items), total: Number(values.total), date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }), status: 'pending', payment: 'Pending' })
    } else if (type === 'Social post') {
      socialPosts.unshift({ platform: values.platform, text: values.text.trim(), likes: 0, comments: 0, date: 'Just now', color: socialPlatforms.find(platform => platform.name === values.platform)?.color || '#355c80' })
    }
    navigate(currentPage)
    showToast(`${type} ${isEdit ? 'updated' : 'added'} successfully`)
  })
}

function exportCurrentData() {
  let filename = currentPage
  let rows = []
  if (currentPage === 'orders') {
    rows = [['Order ID', 'Customer', 'Email', 'Items', 'Total', 'Date', 'Payment', 'Status'], ...orders.map(order => [order.id, order.customer, order.email, order.items, order.total, order.date, order.payment, order.status])]
  } else if (currentPage === 'products') {
    rows = [['SKU', 'Product', 'Category', 'Price', 'Stock', 'Sold', 'Status'], ...products.map(product => [product.id, product.name, product.category, product.price, product.stock, product.sold, product.status])]
  } else if (currentPage === 'customers') {
    rows = [['Name', 'Email', 'Orders', 'Spent', 'Joined', 'Tier'], ...customers.map(customer => [customer.name, customer.email, customer.orders, customer.spent, customer.joined, customer.tier])]
  } else if (currentPage === 'reviews') {
    rows = [['Review ID', 'Customer', 'Product', 'Rating', 'Comment', 'Date', 'Status'], ...reviews.map(review => [review.id, review.customer, review.product, review.rating, review.comment, review.date, review.status])]
  } else {
    rows = [['Month', 'Revenue ($K)', 'Orders'], ...monthlySales.map(month => [month.month, month.sales, month.orders])]
  }
  const csv = rows.map(row => row.map(value => {
    const text = String(value)
    const safe = /^[=+\-@\t\r]/.test(text) ? `'${text}` : text
    return `"${safe.replace(/"/g, '""')}"`
  }).join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob(['\ufeff', csv], { type: 'text/csv;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `nova-${filename}-report.csv`
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  showToast('Your report has been downloaded')
}

function setPopover(button, content) {
  document.querySelectorAll('.header-popover').forEach(popover => popover.remove())
  const wasExpanded = button.getAttribute('aria-expanded') === 'true'
  document.querySelectorAll('.header-actions [aria-expanded="true"]').forEach(openButton => openButton.setAttribute('aria-expanded', 'false'))
  if (wasExpanded) return
  const popover = document.createElement('div')
  popover.className = 'header-popover'
  popover.innerHTML = content
  button.parentElement.appendChild(popover)
  button.setAttribute('aria-expanded', 'true')
  popover.querySelector('button')?.focus()
}

/* ── Page templates ──────────────────────────────────── */
const pages = {
  dashboard() {
    const totalRevenue = orders.reduce((s, o) => s + o.total, 0)
    const kpis = [
      { label: 'Total Revenue', value: fmt(totalRevenue), trend: '+14.2%', up: true, note: 'vs last month', iconBg: '#f5f5f7', iconColor: '#111111' },
      { label: 'Total Orders', value: orders.length.toLocaleString(), trend: '+9.8%', up: true, note: 'this week', iconBg: '#dbeafe', iconColor: '#1d4ed8' },
      { label: 'Products', value: products.length.toString(), trend: '+2 new', up: true, note: 'in catalog', iconBg: '#f0f9ff', iconColor: '#0369a1' },
      { label: 'Customers', value: customers.length.toLocaleString(), trend: '+6.1%', up: true, note: 'active', iconBg: '#ede9fe', iconColor: '#7c3aed' },
    ]

    return `
      <section class="kpi-grid">${kpis.map(k => `
        <article class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-label">${k.label}</span>
            <div class="kpi-icon" style="background:${k.iconBg};color:${k.iconColor}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
            </div>
          </div>
          <div class="kpi-value">${k.value}</div>
          <div class="kpi-trend ${k.up ? 'up' : 'down'}">▲ ${k.trend} <span style="color:var(--slate-400);font-weight:500">${k.note}</span></div>
        </article>
      `).join('')}</section>

      <section class="charts-row">
        <article class="panel">
          <div class="panel-head"><div><h2>Sales Overview</h2><p>Monthly revenue · 2026</p></div>
            <div class="tab-group" role="group" aria-label="Revenue chart range"><button class="tab active" data-range="monthly" aria-pressed="true">Monthly</button><button class="tab" data-range="weekly" aria-pressed="false">Weekly</button></div>
          </div>
          <div class="line-chart-wrap">
            <svg class="line-chart" id="dashLineChart" viewBox="0 0 600 220" preserveAspectRatio="none" role="img" aria-label="Revenue trend chart"></svg>
            <div class="chart-labels" id="dashChartLabels"></div>
          </div>
        </article>
        <article class="panel">
          <div class="panel-head"><div><h2>Sales by Category</h2><p>Product breakdown</p></div></div>
          <div class="donut-section">
            <svg class="donut-chart" id="dashDonut" viewBox="0 0 200 200"></svg>
            <ul class="donut-legend" id="dashDonutLegend"></ul>
          </div>
        </article>
      </section>

      <section class="bottom-row">
        <article class="panel">
          <div class="panel-head"><div><h2>Recent Orders</h2><p>Latest transactions</p></div>
            <button class="btn-ghost" data-goto="orders">View All</button>
          </div>
          <div class="table-scroll"><table>
            <thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Date</th><th>Status</th></tr></thead>
            <tbody>${orders.slice(0, 5).map(o => `
              <tr><td class="ref">${o.id}</td><td>${o.customer}</td><td class="amount">${fmt(o.total)}</td><td class="muted">${o.date}</td><td>${statusBadge(o.status)}</td></tr>
            `).join('')}</tbody>
          </table></div>
        </article>
        <div class="side-panels">
          <article class="panel">
            <div class="panel-head"><div><h2>Top Products</h2><p>Best sellers</p></div></div>
            <ul class="client-list">${[...products].sort((a,b) => b.sold - a.sold).slice(0, 4).map(p => `
              <li class="client-item">${productThumb(p.color, p.name)}
                <div class="client-details"><div class="name">${escapeHTML(p.name)}</div><div class="meta">${p.sold} sold · ${escapeHTML(p.category)}</div></div>
                <span class="client-revenue">${fmt(p.price)}</span>
              </li>
            `).join('')}</ul>
          </article>
          <article class="panel">
            <div class="panel-head"><div><h2>Latest Reviews</h2><p>Customer feedback</p></div></div>
            <ul class="mini-reviews">${reviews.slice(0, 3).map(r => `
              <li class="mini-review"><div class="mini-review-top"><span class="name">${r.customer}</span>${stars(r.rating)}</div>
              <p>${r.comment.slice(0, 60)}…</p></li>
            `).join('')}</ul>
          </article>
        </div>
      </section>`
  },

  products() {
    return `
      <div class="page-toolbar">
        <div class="filter-group">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">Active</button>
          <button class="filter-btn">Low Stock</button>
          <button class="filter-btn">Out of Stock</button>
        </div>
        <select class="select-input" aria-label="Filter products by category"><option>All Categories</option><option>Fashion</option><option>Jewelry</option><option>Bags</option><option>Beauty</option><option>Accessories</option></select>
      </div>
      <section class="stats-inline">
        <div class="stat-pill"><span class="num">${products.length}</span><span class="lbl">Total Products</span></div>
        <div class="stat-pill"><span class="num">${products.filter(p => p.status === 'active').length}</span><span class="lbl">Active</span></div>
        <div class="stat-pill warn"><span class="num">${products.filter(p => p.status === 'low').length}</span><span class="lbl">Low Stock</span></div>
        <div class="stat-pill danger"><span class="num">${products.filter(p => p.status === 'out').length}</span><span class="lbl">Out of Stock</span></div>
      </section>
      <article class="panel">
        <div class="table-scroll"><table>
          <thead><tr><th>Product</th><th>SKU</th><th>Category</th><th>Price</th><th>Stock</th><th>Sold</th><th>Status</th><th></th></tr></thead>
          <tbody>${products.map(p => `
            <tr>
              <td><div class="product-cell">${productThumb(p.color, p.name)}<span>${escapeHTML(p.name)}</span></div></td>
              <td class="muted">${p.id}</td>
              <td>${escapeHTML(p.category)}</td>
              <td class="amount">${fmt(p.price)}</td>
              <td>${p.stock}</td>
              <td>${p.sold}</td>
              <td>${statusBadge(p.status)}</td>
              <td><button type="button" class="btn-icon-sm" title="Edit ${escapeHTML(p.name)}" aria-label="Edit ${escapeHTML(p.name)}" data-action="edit-product" data-id="${p.id}">✎</button></td>
            </tr>
          `).join('')}</tbody>
        </table></div>
      </article>`
  },

  orders() {
    return `
      <div class="page-toolbar">
        <div class="filter-group">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">Pending</button>
          <button class="filter-btn">Processing</button>
          <button class="filter-btn">Shipped</button>
          <button class="filter-btn">Delivered</button>
        </div>
      </div>
      <section class="stats-inline">
        <div class="stat-pill"><span class="num">${orders.length}</span><span class="lbl">Total Orders</span></div>
        <div class="stat-pill"><span class="num">${orders.filter(o => o.status === 'pending').length}</span><span class="lbl">Pending</span></div>
        <div class="stat-pill"><span class="num">${orders.filter(o => o.status === 'processing').length}</span><span class="lbl">Processing</span></div>
        <div class="stat-pill"><span class="num">${fmt(orders.reduce((s,o) => s + o.total, 0))}</span><span class="lbl">Revenue</span></div>
      </section>
      <article class="panel">
        <div class="table-scroll"><table>
          <thead><tr><th>Order ID</th><th>Customer</th><th>Email</th><th>Items</th><th>Total</th><th>Date</th><th>Payment</th><th>Status</th></tr></thead>
          <tbody>${orders.map(o => `
            <tr>
              <td class="ref">${o.id}</td>
              <td>${o.customer}</td>
              <td class="muted">${o.email}</td>
              <td>${o.items}</td>
              <td class="amount">${fmt(o.total)}</td>
              <td class="muted">${o.date}</td>
              <td>${o.payment === 'Paid' ? '<span class="badge completed">Paid</span>' : o.payment === 'Pending' ? statusBadge('pending') : '<span class="badge cancelled">Refunded</span>'}</td>
              <td>${statusBadge(o.status)}</td>
            </tr>
          `).join('')}</tbody>
        </table></div>
      </article>`
  },

  customers() {
    return `
      <section class="stats-inline">
        <div class="stat-pill"><span class="num">${customers.length}</span><span class="lbl">Total Customers</span></div>
        <div class="stat-pill"><span class="num">${customers.filter(c => c.tier === 'Platinum').length}</span><span class="lbl">Platinum</span></div>
        <div class="stat-pill"><span class="num">${fmt(customers.reduce((s,c) => s + c.spent, 0))}</span><span class="lbl">Total Spent</span></div>
        <div class="stat-pill"><span class="num">${Math.round(customers.reduce((s,c) => s + c.orders, 0) / customers.length)}</span><span class="lbl">Avg Orders</span></div>
      </section>
      <section class="customer-grid">${customers.map(c => `
        <article class="customer-card">
          <div class="customer-card-top">
            <div class="client-avatar lg">${escapeHTML(c.initials)}</div>
            <div>${tierBadge(c.tier)}</div>
          </div>
          <h3>${escapeHTML(c.name)}</h3>
          <p class="email">${escapeHTML(c.email)}</p>
          <div class="customer-stats">
            <div><span class="val">${c.orders}</span><span class="lbl">Orders</span></div>
            <div><span class="val">${fmt(c.spent)}</span><span class="lbl">Spent</span></div>
            <div><span class="val">${c.joined}</span><span class="lbl">Joined</span></div>
          </div>
          <button type="button" class="btn-ghost full" data-action="view-customer" data-id="${escapeHTML(c.email)}">View Profile</button>
        </article>
      `).join('')}</section>`
  },

  analytics() {
    return `
      <section class="kpi-grid">${[
        { label: 'Conversion Rate', value: '4.8%', trend: '+0.6%', up: true },
        { label: 'Avg. Session', value: '3m 42s', trend: '+12s', up: true },
        { label: 'Bounce Rate', value: '32.1%', trend: '-2.4%', up: true },
        { label: 'Cart Abandonment', value: '18.5%', trend: '+1.1%', up: false },
      ].map(k => `
        <article class="kpi-card">
          <div class="kpi-top"><span class="kpi-label">${k.label}</span></div>
          <div class="kpi-value">${k.value}</div>
          <div class="kpi-trend ${k.up ? 'up' : 'down'}">${k.up ? '▲' : '▼'} ${k.trend}</div>
        </article>
      `).join('')}</section>

      <section class="charts-row">
        <article class="panel">
          <div class="panel-head"><div><h2>Revenue Trend</h2><p>Sales performance over time</p></div></div>
          <div class="line-chart-wrap">
            <svg class="line-chart" id="analyticsLine" viewBox="0 0 600 220" preserveAspectRatio="none" role="img" aria-label="Revenue trend chart"></svg>
            <div class="chart-labels" id="analyticsLabels"></div>
          </div>
        </article>
        <article class="panel">
          <div class="panel-head"><div><h2>Category Distribution</h2><p>Revenue by category</p></div></div>
          <div class="donut-section">
            <svg class="donut-chart" id="analyticsDonut" viewBox="0 0 200 200"></svg>
            <ul class="donut-legend" id="analyticsDonutLegend"></ul>
          </div>
        </article>
      </section>

      <section class="bottom-row">
        <article class="panel">
          <div class="panel-head"><div><h2>Traffic Sources</h2><p>Where your visitors come from</p></div></div>
          <div class="h-bar-chart" id="trafficChart"></div>
        </article>
        <article class="panel">
          <div class="panel-head"><div><h2>Top Selling Products</h2><p>By units sold</p></div></div>
          <ul class="rank-list">${[...products].sort((a,b) => b.sold - a.sold).map((p, i) => `
            <li class="rank-item">
              <span class="rank-num">${i + 1}</span>
              ${productThumb(p.color, p.name)}
              <div class="rank-info"><span class="name">${escapeHTML(p.name)}</span><span class="meta">${escapeHTML(p.category)}</span></div>
              <span class="rank-val">${p.sold} sold</span>
            </li>
          `).join('')}</ul>
        </article>
      </section>`
  },

  reviews() {
    const avg = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    const dist = [5, 4, 3, 2, 1].map(n => ({ stars: n, count: reviews.filter(r => r.rating === n).length }))

    return `
      <section class="reviews-summary">
        <article class="panel rating-overview">
          <div class="big-rating">${avg}</div>
          <div class="big-stars">${stars(Math.round(avg))}</div>
          <p>${reviews.length} total reviews</p>
          <div class="rating-bars">${dist.map(d => `
            <div class="rating-bar-row">
              <span>${d.stars}★</span>
              <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${(d.count / reviews.length) * 100}%"></div></div>
              <span>${d.count}</span>
            </div>
          `).join('')}</div>
        </article>
        <section class="stats-inline vertical">
          <div class="stat-pill"><span class="num">${reviews.filter(r => r.status === 'approved').length}</span><span class="lbl">Approved</span></div>
          <div class="stat-pill warn"><span class="num">${reviews.filter(r => r.status === 'pending').length}</span><span class="lbl">Pending</span></div>
          <div class="stat-pill"><span class="num">${reviews.filter(r => r.rating >= 4).length}</span><span class="lbl">Positive (4★+)</span></div>
        </section>
      </section>

      <div class="page-toolbar">
        <div class="filter-group">
          <button class="filter-btn active">All</button>
          <button class="filter-btn">Approved</button>
          <button class="filter-btn">Pending</button>
          <button class="filter-btn">5 Stars</button>
        </div>
      </div>

      <section class="reviews-grid">${reviews.map(r => `
        <article class="review-card" data-review-id="${r.id}">
          <div class="review-card-head">
            <div class="reviewer">
              <div class="client-avatar">${r.customer.split(' ').map(w=>w[0]).join('')}</div>
              <div><div class="name">${r.customer}</div><div class="meta">${r.date}</div></div>
            </div>
            ${statusBadge(r.status)}
          </div>
          <div class="review-product">${r.product}</div>
          <div class="review-stars">${stars(r.rating)}</div>
          <p class="review-text">${r.comment}</p>
          <div class="review-actions">
            ${r.status === 'pending' ? '<button type="button" class="btn-ghost sm" data-action="approve-review">Approve</button><button type="button" class="btn-ghost sm danger-text" data-action="reject-review">Reject</button>' : '<button type="button" class="btn-ghost sm" data-action="reply-review">Reply</button>'}
          </div>
        </article>
      `).join('')}</section>`
  },

  social() {
    return `
      <section class="stats-inline">
        <div class="stat-pill"><span class="num">202K</span><span class="lbl">Total Followers</span></div>
        <div class="stat-pill"><span class="num">4.2%</span><span class="lbl">Avg Engagement</span></div>
        <div class="stat-pill"><span class="num">2.4M</span><span class="lbl">Monthly Reach</span></div>
        <div class="stat-pill"><span class="num">18.5K</span><span class="lbl">Link Clicks</span></div>
      </section>

      <section class="social-platforms">${socialPlatforms.map(p => `
        <article class="social-card" style="--platform-color:${p.color}">
          <div class="social-card-top">
            <div class="platform-icon">${p.icon}</div>
            <div>
              <h3>${p.name}</h3>
              <p>${p.handle}</p>
            </div>
          </div>
          <div class="social-card-stats">
            <div><span class="val">${p.followers}</span><span class="lbl">Followers</span></div>
            <div><span class="val">${p.engagement}</span><span class="lbl">Engagement</span></div>
            <div><span class="val">${p.posts}</span><span class="lbl">Posts</span></div>
          </div>
          <div class="social-growth up">▲ ${p.growth} this month</div>
        </article>
      `).join('')}</section>

      <section class="bottom-row">
        <article class="panel">
          <div class="panel-head"><div><h2>Recent Posts</h2><p>Latest social media activity</p></div></div>
          <ul class="social-posts">${socialPosts.map(post => `
            <li class="social-post">
              <div class="post-platform" style="background:${post.color}">${post.platform[0]}</div>
              <div class="post-body">
                <div class="post-meta"><strong>${post.platform}</strong> · ${post.date}</div>
                <p>${escapeHTML(post.text)}</p>
                <div class="post-stats">❤ ${post.likes.toLocaleString()} · 💬 ${post.comments}</div>
              </div>
            </li>
          `).join('')}</ul>
        </article>

        <article class="panel">
          <div class="panel-head"><div><h2>Connect Accounts</h2><p>Link your social channels</p></div></div>
          <ul class="connect-list">${socialPlatforms.map(p => `
            <li class="connect-item">
              <div class="platform-icon sm" style="background:${p.color}">${p.icon}</div>
              <div class="connect-info"><span class="name">${p.name}</span><span class="handle">${p.handle}</span></div>
              <button type="button" class="btn-ghost sm" data-action="toggle-platform" data-platform="${p.name}">${connectedPlatforms.has(p.name) ? 'Connected' : 'Connect'}</button>
            </li>
          `).join('')}</ul>
          <div class="social-share-box">
            <p>Share your store</p>
            <div class="share-buttons">
              <button type="button" class="share-btn" style="background:#E1306C" data-action="share-store" data-platform="Instagram">Instagram</button>
              <button type="button" class="share-btn" style="background:#1877F2" data-action="share-store" data-platform="Facebook">Facebook</button>
              <button type="button" class="share-btn" style="background:#1f3b57" data-action="share-store" data-platform="TikTok">TikTok</button>
              <button type="button" class="share-btn" style="background:#E60023" data-action="share-store" data-platform="Pinterest">Pinterest</button>
            </div>
          </div>
        </article>
      </section>`
  },
}

/* ── Router ──────────────────────────────────────────── */
function navigate(page) {
  if (!pages[page]) page = 'dashboard'
  currentPage = page

  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page)
  })

  document.querySelectorAll('.mob-nav[data-page]').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page)
    if (l.dataset.page === page) l.setAttribute('aria-current', 'page')
    else l.removeAttribute('aria-current')
  })
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page')
    else link.removeAttribute('aria-current')
  })

  const meta = PAGE_META[page]
  document.getElementById('pageTitle').textContent = meta.title
  document.getElementById('pageSubtitle').textContent = meta.subtitle
  document.querySelector('#headerAction span').textContent = meta.action
  const actionIcon = document.querySelector('#headerAction svg')
  if (['products', 'orders', 'customers', 'social'].includes(page)) {
    actionIcon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'
  } else if (page === 'reviews') {
    actionIcon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/>'
  } else {
    actionIcon.innerHTML = '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
  }
  document.title = `${meta.title} — Nova`

  const container = document.getElementById('pageContent')
  container.innerHTML = pages[page]()
  container.querySelectorAll('.filter-btn').forEach(button => button.setAttribute('aria-pressed', String(button.classList.contains('active'))))
  container.classList.add('fade-in')
  setTimeout(() => container.classList.remove('fade-in'), 300)

  requestAnimationFrame(() => initPageCharts(page))
  bindPageEvents()
  applyPageFilters()
}

function initPageCharts(page) {
  if (page === 'dashboard') {
    buildLineChart(monthlySales, 'dashLineChart', 'dashChartLabels')
    buildDonut(categorySales, 'dashDonut', 'dashDonutLegend')
  }
  if (page === 'analytics') {
    buildLineChart(monthlySales, 'analyticsLine', 'analyticsLabels')
    buildDonut(categorySales, 'analyticsDonut', 'analyticsDonutLegend')
    buildBarChart(trafficSources, 'trafficChart')
  }
}

function bindPageEvents() {
  const container = document.getElementById('pageContent')
  container.onclick = event => {
    const button = event.target.closest('button')
    if (!button) return
    if (button.matches('[data-goto]')) {
      navigate(button.dataset.goto)
      location.hash = button.dataset.goto
      return
    }
    if (button.classList.contains('filter-btn')) {
      button.parentElement.querySelectorAll('.filter-btn').forEach(filter => {
        filter.classList.remove('active')
        filter.setAttribute('aria-pressed', 'false')
      })
      button.classList.add('active')
      button.setAttribute('aria-pressed', 'true')
      applyPageFilters()
      return
    }
    if (button.classList.contains('tab')) {
      button.parentElement.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active')
        tab.setAttribute('aria-pressed', 'false')
      })
      button.classList.add('active')
      button.setAttribute('aria-pressed', 'true')
      const data = button.dataset.range === 'weekly' ? weeklySales : monthlySales
      const prefix = currentPage === 'analytics' ? 'analytics' : 'dash'
      buildLineChart(data, `${prefix}Line${prefix === 'dash' ? 'Chart' : ''}`, `${prefix === 'dash' ? 'dashChartLabels' : 'analyticsLabels'}`)
      const description = button.closest('.panel-head').querySelector('p')
      if (description && currentPage === 'dashboard') description.textContent = button.dataset.range === 'weekly' ? 'Daily revenue · Last 7 days' : 'Monthly revenue · 2026'
      return
    }
    if (button.classList.contains('device-tab')) {
      const showcase = document.getElementById('deviceShowcase')
      if (!showcase) return
      button.parentElement.querySelectorAll('.device-tab').forEach(tab => tab.classList.remove('active'))
      button.classList.add('active')
      showcase.classList.remove('show-phone', 'show-tablet')
      if (button.dataset.device === 'phone') showcase.classList.add('show-phone')
      if (button.dataset.device === 'tablet') showcase.classList.add('show-tablet')
      return
    }
    handlePageAction(button)
  }
  const categorySelect = container.querySelector('.select-input')
  if (categorySelect) categorySelect.addEventListener('change', applyPageFilters)
}

function getPageTargets() {
  const selectors = {
    dashboard: '.bottom-row tbody tr, .client-item, .mini-review',
    products: '.table-scroll tbody tr',
    orders: '.table-scroll tbody tr',
    customers: '.customer-card',
    analytics: '.rank-item',
    reviews: '.review-card',
    social: '.social-card, .social-post',
  }
  return [...document.querySelectorAll(`#pageContent ${selectors[currentPage] || ''}`)]
}

function applyPageFilters() {
  const query = document.getElementById('globalSearch').value.trim().toLowerCase()
  const selected = document.querySelector('#pageContent .filter-btn.active')?.textContent.trim().toLowerCase() || 'all'
  const category = document.querySelector('#pageContent .select-input')?.value.toLowerCase() || 'all categories'
  let shown = 0
  getPageTargets().forEach(target => {
    const text = target.textContent.toLowerCase()
    let matchesFilter = selected === 'all' || text.includes(selected)
    if (currentPage === 'reviews' && selected === '5 stars') matchesFilter = target.querySelectorAll('.star.filled').length === 5
    const matchesCategory = currentPage !== 'products' || category === 'all categories' || text.includes(category)
    const matchesSearch = !query || text.includes(query)
    const visible = matchesFilter && matchesCategory && matchesSearch
    target.classList.toggle('is-filtered', !visible)
    if (visible) shown++
  })
  let empty = document.querySelector('#pageContent .empty-state')
  if (!empty && getPageTargets().length) {
    empty = document.createElement('p')
    empty.className = 'empty-state'
    empty.textContent = 'No results found. Try adjusting your search or filters.'
    empty.hidden = true
    document.getElementById('pageContent').appendChild(empty)
  }
  if (empty) empty.hidden = shown > 0 || getPageTargets().length === 0
}

function handlePageAction(button) {
  const action = button.dataset.action
  if (action === 'edit-product') {
    const product = products.find(entry => entry.id === button.dataset.id)
    if (product) openEditor('Product', product)
  } else if (action === 'view-customer') {
    const customer = customers.find(entry => entry.email === button.dataset.id)
    if (customer) openDialog(customer.name, `<div class="profile-detail"><p>${escapeHTML(customer.email)}</p><p><strong>${customer.tier}</strong> member since ${escapeHTML(customer.joined)}</p><p>${customer.orders} orders · ${fmt(customer.spent)} lifetime spend</p></div>`)
  } else if (action === 'approve-review' || action === 'reject-review') {
    const card = button.closest('.review-card')
    const review = reviews.find(entry => entry.id === card?.dataset.reviewId)
    if (review) {
      review.status = action === 'approve-review' ? 'approved' : 'rejected'
      navigate(currentPage)
      showToast(`Review ${action === 'approve-review' ? 'approved' : 'rejected'}`)
    }
  } else if (action === 'reply-review') {
    const review = reviews.find(entry => entry.id === button.closest('.review-card')?.dataset.reviewId)
    if (review) openDialog(`Reply to ${review.customer}`, `<label class="form-field">Your reply<textarea name="reply" rows="4" required placeholder="Write a thoughtful response…"></textarea></label>`, form => {
      review.reply = form.get('reply').trim()
      showToast('Reply saved')
    })
  } else if (action === 'toggle-platform') {
    const name = button.dataset.platform
    if (connectedPlatforms.has(name)) connectedPlatforms.delete(name)
    else connectedPlatforms.add(name)
    button.textContent = connectedPlatforms.has(name) ? 'Connected' : 'Connect'
    showToast(`${name} ${connectedPlatforms.has(name) ? 'connected' : 'disconnected'}`)
  } else if (action === 'share-store') shareStore(button.dataset.platform)
}

async function shareStore(platform) {
  const storeUrl = `${location.origin}${location.pathname}`
  if (navigator.share) {
    try {
      await navigator.share({ title: storeSettings.name, text: `Discover ${storeSettings.name}`, url: storeUrl })
      return
    } catch (error) {
      if (error.name === 'AbortError') return
    }
  }
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(storeUrl)
      showToast(`Store link copied for ${platform}`)
      return
    } catch (error) {
      openDialog(`Share on ${platform}`, `<p class="dialog-copy">Copy this link to share your storefront:</p><label class="form-field">Store link<input value="${escapeHTML(storeUrl)}" readonly></label><button type="button" class="btn-ghost" data-copy-link>Copy link</button>`)
      return
    }
  }
  openDialog(`Share on ${platform}`, `<p class="dialog-copy">Copy this link to share your storefront:</p><label class="form-field">Store link<input value="${escapeHTML(storeUrl)}" readonly></label><button type="button" class="btn-ghost" data-copy-link>Copy link</button>`)
}

function initNav() {
  const sidebar = document.getElementById('sidebar')
  const overlay = document.getElementById('sidebarOverlay')
  const toggle = document.getElementById('menuToggle')
  document.querySelectorAll('.nav-link').forEach(link => { link.title = link.textContent.trim() })
  const syncSidebarState = () => {
    const isMobileOpen = sidebar.classList.contains('open')
    if (window.innerWidth > 900) {
      sidebar.classList.remove('open')
      overlay.classList.remove('open')
      toggle.setAttribute('aria-expanded', String(!document.body.classList.contains('sidebar-collapsed')))
    } else {
      toggle.setAttribute('aria-expanded', String(isMobileOpen))
    }
    document.getElementById('mobMenuBtn').setAttribute('aria-expanded', String(window.innerWidth <= 900 && isMobileOpen))
  }
  syncSidebarState()
  window.addEventListener('resize', syncSidebarState)

  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.page)
      history.replaceState(null, '', `#${link.dataset.page}`)
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        toggle.setAttribute('aria-expanded', 'false')
        document.getElementById('mobMenuBtn').setAttribute('aria-expanded', 'false')
      }
    })
  })

  toggle.addEventListener('click', () => {
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle('open')
      overlay.classList.toggle('open')
      toggle.setAttribute('aria-expanded', String(sidebar.classList.contains('open')))
      document.getElementById('mobMenuBtn').setAttribute('aria-expanded', String(sidebar.classList.contains('open')))
    } else {
      document.body.classList.toggle('sidebar-collapsed')
      toggle.setAttribute('aria-expanded', String(!document.body.classList.contains('sidebar-collapsed')))
    }
  })

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open')
    overlay.classList.remove('open')
    toggle.setAttribute('aria-expanded', 'false')
    document.getElementById('mobMenuBtn').setAttribute('aria-expanded', 'false')
  })

  document.querySelectorAll('.mob-nav[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      navigate(link.dataset.page)
      history.replaceState(null, '', `#${link.dataset.page}`)
    })
  })

  const mobMenuBtn = document.getElementById('mobMenuBtn')
  if (mobMenuBtn) {
    mobMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open')
      overlay.classList.toggle('open')
      toggle.setAttribute('aria-expanded', String(sidebar.classList.contains('open')))
      mobMenuBtn.setAttribute('aria-expanded', String(sidebar.classList.contains('open')))
    })
  }

  document.getElementById('globalSearch').addEventListener('input', applyPageFilters)
  document.getElementById('headerAction').addEventListener('click', () => {
    if (currentPage === 'products') openEditor('Product')
    else if (currentPage === 'customers') openEditor('Customer')
    else if (currentPage === 'orders') openEditor('Order')
    else if (currentPage === 'social') openEditor('Social post')
    else if (currentPage === 'reviews') {
      navigate('reviews')
      const pendingFilter = Array.from(document.querySelectorAll('#pageContent .filter-btn')).find(button => button.textContent.trim() === 'Pending')
      if (pendingFilter) pendingFilter.click()
      showToast('Showing reviews that need attention')
    } else exportCurrentData()
  })
  document.querySelector('.sidebar-settings').addEventListener('click', () => openDialog('Store settings', `<div class="profile-detail"><p>Manage your storefront details.</p><label class="form-field">Store name<input name="storeName" value="${escapeHTML(storeSettings.name)}" required></label><label class="form-field">Contact email<input name="contactEmail" type="email" value="${escapeHTML(storeSettings.email)}" required></label></div>`, form => {
    storeSettings = { name: form.get('storeName').trim(), email: form.get('contactEmail').trim() }
    showToast('Store settings saved')
  }))
  document.querySelector('.btn-upgrade').addEventListener('click', () => openDialog('Grow with Nova', '<p class="dialog-copy">Explore marketing tools, customer insights, and automation options for your store.</p><div class="plan-highlight"><strong>Nova Growth</strong><span>Campaigns · Advanced analytics · Priority support</span></div>'))

  document.getElementById('notificationsButton').addEventListener('click', event => {
    setPopover(event.currentTarget, '<strong class="popover-title">Notifications</strong><p><span class="notification-marker"></span>New order <b>ORD-48291</b> was delivered.<small>Today · 9:42 AM</small></p><p><span class="notification-marker"></span>2 reviews are waiting for moderation.<small>Today · 8:15 AM</small><button type="button" data-popover-action="reviews">Review now</button></p>')
  })
  document.getElementById('profileButton').addEventListener('click', event => {
    setPopover(event.currentTarget, '<strong class="popover-title">Fatima Laurent</strong><p class="popover-subtitle">Store Manager</p><button type="button" data-popover-action="settings">Store settings</button><button type="button" data-popover-action="signout">Sign out</button>')
  })
  document.addEventListener('click', event => {
    const copyButton = event.target.closest('[data-copy-link]')
    if (copyButton) {
      const link = document.querySelector('#appDialog input[readonly]')
      if (link) {
        link.select()
        if (navigator.clipboard) navigator.clipboard.writeText(link.value).then(() => showToast('Store link copied')).catch(() => showToast('Select and copy the store link'))
        else showToast('Select and copy the store link')
      }
      return
    }
    const popoverAction = event.target.closest('[data-popover-action]')
    if (popoverAction) {
      document.querySelectorAll('.header-popover').forEach(popover => popover.remove())
      document.querySelectorAll('.header-actions [aria-expanded="true"]').forEach(button => button.setAttribute('aria-expanded', 'false'))
      if (popoverAction.dataset.popoverAction === 'reviews') navigate('reviews')
      else if (popoverAction.dataset.popoverAction === 'settings') document.querySelector('.sidebar-settings').click()
      else showToast('You are signed out of the demo session')
      return
    }
    if (!event.target.closest('.header-actions')) {
      document.querySelectorAll('.header-popover').forEach(popover => popover.remove())
      document.querySelectorAll('.header-actions [aria-expanded="true"]').forEach(button => button.setAttribute('aria-expanded', 'false'))
    }
  })

  const hash = location.hash.replace('#', '')
  navigate(pages[hash] ? hash : 'dashboard')
}

document.addEventListener('DOMContentLoaded', initNav)
