const links = [
    {
      label: "Week-1",
      url: "week-1/index.html"
    },
    {label: "Week-2",
      url: "week-2/index.html"
    },
    {label: "Week-3",
      url: "week-3/index.html"
    },
    {label: "Week-4",
      url: "week-4/index.html"
    }

  ];





  
const worklist = document.getElementById('listwork');

for(let i = 0; i < links.length; i++) {
    const menu = document.createElement('li');
    const link = document.createElement('a');
    link.href = links[i].url;
    link.innerHTML = links[i].label;
    menu.appendChild(link);
    worklist.appendChild(menu);
}