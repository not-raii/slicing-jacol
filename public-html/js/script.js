fetchData("role").then((response) => {
    let role = document.querySelector("#roles .col-md-4");
    let roleAbout = document.querySelector("#roles #roleAbout div");//about hero
    let roleAdvantage = document.querySelector("#roles #roleAdvantage div");//kelebihan hero
    let rolePurpose = document.querySelector("#roles #rolePurpose div");//tujuan hero
    let title = document.querySelector("#section-role .name-hero");
    let imgRole = document.querySelector("#section-role #chara-hero");
    let html = "";
    response.map((res) => {
      html += `
                  <a href="#" onclick="return changeRole(${
                    res.id
                  }, this)" data-id="${res.id}" class="d-block mt-3 ${
        res.active == true ? "active" : ""
      }">
                      <img src="./images/heroes/${res.icon}" alt="">
                      <span>${res.name}</span>
                  </a>
              `;
    });
  
    let data = response.filter((res) => res.active == true);
  
    roleAbout.textContent = data[0].feature.about;
    roleAdvantage.textContent = data[0].feature.advantage;
    rolePurpose.textContent = data[0].feature.purpose;
    title.textContent = data[0].name;
    subtitle.textContent = data[0].name;
    role.innerHTML = html;
    imgRole.innerHTML = `<img src="/assets/icons/${data[0].img}" alt="" class="img-fluid">`;
  });