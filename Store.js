AFRAME.registerComponent("store", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "iron-man",
        title: "Iron Man",
        url: "/assets/thumbnail/iron_man.jpg",
      },
      {
        id: "peter-parker",
        title: "Peter Parker",
        url: "/assets/thumbnail/peter_parker.jpg",
      },

      {
        id: "hulk",
        title: "Hulk",
        url: "/assets/thumbnail/hulk.jpg",
      },
      {
        id: "what-if",
        title: "What If",
        url: "/assets/thumbnail/what if.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element

      const borderEl = this.createBorder(position, item.id)
      
      // Thumbnail Element
     
      const thumbnail = this.createThumbNail(item)
      borderEl.appendChild(thumbnail)

      // Title Text Element

      const titleEl = this.createTitleEl(position, item)
      borderEl.appendChild(titleEl)
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position, id){
    const entityEl = document.createElement("a-entity")
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width : 20,
      height : 20,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#ffffff",
      opacity: 0.1,
    });

    return entityEl;

  },

  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width : 20,
      height : 20,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },

  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },

});
