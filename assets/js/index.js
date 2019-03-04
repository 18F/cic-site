// Stuff for FedRAMP Vendors
const formatName = provider =>
  `${provider.Cloud_Service_Provider_Name} - ${provider.Cloud_Service_Provider_Package}`;

const formatUrl = provider => {
  const formatted = provider.Cloud_Service_Provider_Package
    .toLowerCase()
    .replace(/ /g, '-');
  return `https://marketplace.fedramp.gov/#/product/${formatted}`
};

const url = 'https://api.github.com/repos/18F/fedramp-data/contents/data/data.json';

const categoryField = 'Deployment_Model';

const getProviders = (category) => {
  return fetch(url)
    .then(r => r.json())
    .then(json =>
      JSON.parse(atob(json.content)).data.Providers
        .filter(provider => provider[categoryField] === category)
        .map(provider => ({ name: formatName(provider), url: formatUrl(provider) }))
    )
};
//

(function (document, window, $) {

  // Initialize sticky fill
  var stickyElements = document.getElementsByClassName('sticky');

  for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
  }

    // Trigger point at which to perform dynamic effects on the nav bar
    var triggerPoint = 60;

    var $navPrimary = document.getElementById("usa-nav-primary");

  // Shrink the nav bar upon page scroll.
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > triggerPoint) {
      $navPrimary.classList.add("scrolled");
    } else {
      $navPrimary.classList.remove("scrolled");
    }
  });

  const foobar = document.getElementById('fedramp-vendors');
  if (foobar) {
    const category = 'Hybrid Cloud';
    getProviders(category)
      .then(providers => {
        foobar.innerHTML = providers
          .map(({ name, url}) => `<li><a href="${url}">${name}</a></li>`)
          .join('');
      })
  }

})(document, window, $);
