// Get sort buttons
sortCurated = document.getElementById('curated');
sortName = document.getElementById('name');
sortRecent = document.getElementById('recent');

// Get filter buttons
fieldSE = document.getElementById('se');
fieldPD = document.getElementById('pd');
fieldDS = document.getElementById('ds');
fieldGD = document.getElementById('gd');

// Get parameters
filters = {
  sort: getQueryVariable('sort'),
  se: getQueryVariable('se'),
  pd: getQueryVariable('pd'),
  ds: getQueryVariable('ds'),
  gd: getQueryVariable('gd'),
};
saveButton = document.getElementById('save-container');
saveFilters = JSON.parse(JSON.stringify(filters)); // Deep copy

// Retrieve parameters
function getQueryVariable(variable) {
  query = window.location.search.substring(1);
  vars = query.split('&');
  finalValue = variable == 'sort' ? 'curated' : 'true';
  for (i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      finalValue = pair[1];
    }
  }
  return finalValue;
}

// Compare dictionaries
function differentDict(dict1, dict2) {
  result = false;
  ['sort', 'se', 'pd', 'ds', 'gd'].forEach((key) => {
    result = result || dict1[key] != dict2[key];
  });
  return result;
}

// Toggle field button
function toggleFieldButton() {
  if (saveFilters['se'] == 'true') {
    fieldSE.classList.add('active');
  } else {
    fieldSE.classList.remove('active');
  }
  if (saveFilters['pd'] == 'true') {
    fieldPD.classList.add('active');
  } else {
    fieldPD.classList.remove('active');
  }
  if (saveFilters['ds'] == 'true') {
    fieldDS.classList.add('active');
  } else {
    fieldDS.classList.remove('active');
  }
  if (saveFilters['gd'] == 'true') {
    fieldGD.classList.add('active');
  } else {
    fieldGD.classList.remove('active');
  }
}

// Toggle sort button
function toggleSortButton() {
  if (saveFilters['sort'] == 'curated') {
    sortCurated.classList.add('active');
    sortName.classList.remove('active');
    sortRecent.classList.remove('active');
  }
  if (saveFilters['sort'] == 'name') {
    sortName.classList.add('active');
    sortCurated.classList.remove('active');
    sortRecent.classList.remove('active');
  }
  if (saveFilters['sort'] == 'recent') {
    sortRecent.classList.add('active');
    sortCurated.classList.remove('active');
    sortName.classList.remove('active');
  }
}

// Reload website with saved filter
function reload() {
  newLink = '';
  ['sort', 'se', 'pd', 'ds', 'gd'].forEach((key) => {
    newLink = newLink + '&' + key + '=' + saveFilters[key];
  });
  window.location.search = '?' + newLink;
}

// Initialize
$(document).ready(function () {
  toggleSortButton();
  toggleFieldButton();
});

// Reload on click
sortCurated.addEventListener('click', function () {
  saveFilters['sort'] = 'curated';
  toggleSortButton();
  reload();
});
sortName.addEventListener('click', function () {
  saveFilters['sort'] = 'name';
  toggleSortButton();
  reload();
});
sortRecent.addEventListener('click', function () {
  saveFilters['sort'] = 'recent';
  toggleSortButton();
  reload();
});
fieldDS.addEventListener('click', function () {
  saveFilters['ds'] = saveFilters['ds'] == 'true' ? 'false' : 'true';
  toggleFieldButton();
  reload();
});
fieldGD.addEventListener('click', function () {
  saveFilters['gd'] = saveFilters['gd'] == 'true' ? 'false' : 'true';
  toggleFieldButton();
  reload();
});
fieldPD.addEventListener('click', function () {
  saveFilters['pd'] = saveFilters['pd'] == 'true' ? 'false' : 'true';
  toggleFieldButton();
  reload();
});
fieldSE.addEventListener('click', function () {
  saveFilters['se'] = saveFilters['se'] == 'true' ? 'false' : 'true';
  toggleFieldButton();
  reload();
});
