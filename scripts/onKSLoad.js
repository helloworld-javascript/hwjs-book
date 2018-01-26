function onKSLoad(el) {
  const doc = el.getSVGDocument();
  doc.documentElement.style.cursor = 'pointer';
  doc.addEventListener('click', function() {
    doc.ks && doc.ks.time(0);
  });
  doc.addEventListener('mouseenter', function() {
    el.classList.add('hover');
  })
  doc.addEventListener('mouseleave', function() {
    el.classList.remove('hover');
  })
  if (doc.ks && el.hasAttribute('data-loop')) {
    setInterval(function() {
      doc.ks.play();
    }, 500);
  }
};
