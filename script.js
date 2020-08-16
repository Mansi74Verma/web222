/* Add any JavaScript you need to this file. */
/*
Name: Mansi Verma
Seneca ID: 141641191
Email: mverma37@myseneca
Date: August 10,2020
*/

/*
For I had good experience for designing. I designed a template when I was in 11th standard but I did it all by myself. I
did all the coding for css
from what I remember from my coaching classes and javascript files from what I learned from Seneca coding. I did not
share my code with anyone. Neither
did I help anyone. The last assignment suspection made me bit scary so I make it pretty sure not to help anyone. Rest It
tooks a lot of time to code it.
Because I was thinking to score for more this time instead of lowering my marks. I apologize for the last one though.
Thank you !
*/

/*
For all the images I had are from https://unsplash.com/
Used https://www.reduceimages.com/ to reduce size


*/

window.addEventListener('load', () => {
  var g3 = document.getElementById('food');
  var all = document.getElementById('all');

  all.addEventListener('click', () => {
    while (g3.firstChild) {
      g3.removeChild(g3.firstChild);
      // this removes the already loaded filtered pictures for snacks, drinks, desserts and load the other one on clicking.
      //It is really concise than making a delete function. Simply remove the firstchild
    }
    for (var i = 0; i < menu.length; i++) {
      /*for each coding part in menu_data it goes through all the 9 items in the object menu */

      var g2 = document.createElement('div');
      g2.className = 'g2';
      var img = document.createElement('img');
      img.src = 'img/' + menu[i]['Code'] + '.jpg';
      /*Tried to access the image same way for the flags. */
      var outer = document.createElement('div');
      outer.className = 'outer';
      var h1 = document.createElement('h1');
      var title = document.createTextNode(menu[i]['Name']);
      h1.appendChild(title);
      outer.appendChild(h1);
      g2.appendChild(img);
      g2.appendChild(outer);
      g3.appendChild(g2);
      //And just append the child there for parent so it works for the hovers on the food items I am selling at Mansi's Kitchen
    }
  });
  var snacks = document.getElementById('snacks');

  snacks.addEventListener('click', () => {
    while (g3.firstChild) {
      g3.removeChild(g3.firstChild);
    }
    for (var i = 0; i < menu.length; i++) {
      if (menu[i]['Type'] == 'Snacks') {
        var g2 = document.createElement('div');
        g2.className = 'g2';
        var img = document.createElement('img');
        img.src = 'img/' + menu[i]['Code'] + '.jpg';
        var outer = document.createElement('div');
        outer.className = 'outer';
        var h1 = document.createElement('h1');
        var title = document.createTextNode(menu[i]['Name']);
        h1.appendChild(title);
        outer.appendChild(h1);
        g2.appendChild(img);
        g2.appendChild(outer);
        g3.appendChild(g2);
      }
    }
    var h1b = document.createElement('h1');
    var titleb = document.createTextNode('THE BEST SNACKS EVER!@!!');
    /* It's same the way for all of them but here it filtered the data for snacks by type */
    h1b.appendChild(titleb);
    g3.appendChild(h1b);
  });
  var drinks = document.getElementById('drinks');
  drinks.addEventListener('click', () => {
    while (g3.firstChild) {
      g3.removeChild(g3.firstChild);
    }
    for (var i = 0; i < menu.length; i++) {
      if (menu[i]['Type'] == 'Drinks') {
        var g2 = document.createElement('div');
        g2.className = 'g2';
        var img = document.createElement('img');
        img.src = 'img/' + menu[i]['Code'] + '.jpg';
        var outer = document.createElement('div');
        outer.className = 'outer';
        var h1 = document.createElement('h1');
        var title = document.createTextNode(menu[i]['Name']);
        h1.appendChild(title);
        outer.appendChild(h1);
        g2.appendChild(img);
        g2.appendChild(outer);
        g3.appendChild(g2);
      }
    }
    var h1b = document.createElement('h1');
    var titleb = document.createTextNode('THE BEST DRINKS EVER!@!!');
    /* It's same the way for all of them but here it filtered the data for drinks by type */
    h1b.appendChild(titleb);
    g3.appendChild(h1b);
  });
  var desserts = document.getElementById('desserts');
  desserts.addEventListener('click', () => {
    while (g3.firstChild) {
      g3.removeChild(g3.firstChild);
    }
    for (var i = 0; i < menu.length; i++) {
      if (menu[i]['Type'] == 'Desserts') {
        var g2 = document.createElement('div');
        g2.className = 'g2';
        var img = document.createElement('img');
        img.src = 'img/' + menu[i]['Code'] + '.jpg';
        var outer = document.createElement('div');
        outer.className = 'outer';
        var h1 = document.createElement('h1');
        var title = document.createTextNode(menu[i]['Name']);
        h1.appendChild(title);
        outer.appendChild(h1);
        g2.appendChild(img);
        g2.appendChild(outer);
        g3.appendChild(g2);
      }
    }
    var h1b = document.createElement('h1');
    var titleb = document.createTextNode('THE BEST DESSERTS EVER!@!!');
    /* It's same the way for all of them but here it filtered the data for desserts by type */
    h1b.appendChild(titleb);
    g3.appendChild(h1b);
  });

  while (g3.firstChild) {
    g3.removeChild(g3.firstChild);
  }
  for (var i = 0; i < menu.length; i++) {
    var g2 = document.createElement('div');
    g2.className = 'g2';
    var img = document.createElement('img');
    img.src = 'img/' + menu[i]['Code'] + '.jpg';
    var outer = document.createElement('div');
    outer.className = 'outer';
    var h1 = document.createElement('h1');
    var title = document.createTextNode(menu[i]['Name']);
    h1.appendChild(title);
    outer.appendChild(h1);
    g2.appendChild(img);
    g2.appendChild(outer);

    g3.appendChild(g2);
  }
});

function show() {
  document.getElementById('extrablock').style.display = "block";
}

function hide() {
  document.getElementById('extrablock').style.display = "none";
}
