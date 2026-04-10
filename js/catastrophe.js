(() => {
  const audienceType = document.getElementById('audienceType');
  const audienceCopy = document.getElementById('audience-copy');
  const buttons = document.querySelectorAll('.audience-btn');

  const copy = {
    fire: '<p><strong>Fire and emergency services matter first here.</strong> This review is meant to show how local responder safety can grow when A.I.R.O.N. is deployed in participating businesses and operations.</p>',
    business: '<p><strong>Business participation is part of the safety equation.</strong> A.I.R.O.N. deployment is the local operating foundation that allows C.A.T.A.S.T.R.O.P.H.E. to exist as a real emergency-response layer instead of an abstract idea.</p>',
    public: '<p><strong>Community interest helps identify where this protection should grow next.</strong> The public-safety benefit is real, but it depends on local business deployment of A.I.R.O.N. and local responder engagement.</p>'
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => {
        btn.classList.remove('is-active');
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');
      const selected = button.dataset.audience;
      if (audienceType) audienceType.value = selected;
      if (audienceCopy && copy[selected]) audienceCopy.innerHTML = copy[selected];
    });
  });
})();
