// 부드러운 스크롤 (내비 클릭 시)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Netlify Forms를 쓰지 않아도, 기본적으로 성공 메시지 표시
const form = document.querySelector('form[name="contact"]');
const result = document.getElementById('formResult');

if (form && result) {
  form.addEventListener('submit', async (e) => {
    // Netlify 사용 시에는 그냥 전송(페이지 이동) 되도록 하고 싶다면 이 블록을 제거하세요.
    e.preventDefault();

    // 아주 간단한 데모: 메일 링크로 유도하거나, 추후 백엔드 연동 가능
    result.textContent = '문의가 접수되었습니다. 24시간 내 답변드릴게요.';
    form.reset();
  });
}
