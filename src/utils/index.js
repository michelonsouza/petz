export function hideInitialLoading() {
  const body = document.querySelector('body');
  const loading = document.querySelector('#initial-loading');

  body.classList.remove('loading');
  loading.style.display = 'none';
}
