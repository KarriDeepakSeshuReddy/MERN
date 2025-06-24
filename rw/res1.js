const cardData = [
    {
      img: 'images/image copy.png',
      discount: 15,
      daysLeft: 6
    },
    {
      img: 'images/image copy 2.png',
      discount: 10,
      daysLeft: 6
    },
    {
      img: 'images/image copy 3.png',
      discount: 25,
      daysLeft: 7
    },
    {
      img: 'images/image copy 4.png',
      discount: 20,
      daysLeft: 8
    }
  ];
  
  const container = document.getElementById('cardContainer');
  
  cardData.forEach(data => {
    
    const card = document.createElement('div');
    card.className = 'card';
  

    const imgWrapper = document.createElement('div');
    imgWrapper.style.position = 'relative';
  
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = 'Food Image';
  
    const badge = document.createElement('div');
    badge.className = 'discount';
    badge.innerHTML = `${data.discount}<sup>%</sup> Off`;
  
    imgWrapper.appendChild(img);
    imgWrapper.appendChild(badge);
  
    const content = document.createElement('div');
    content.className = 'card-content';
  
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = 'Greys Vage';
  
    const days = document.createElement('div');
    days.className = 'remaining';
    days.textContent = `${data.daysLeft} Days Remaining`;
  
    content.appendChild(title);
    content.appendChild(days);
  

    card.appendChild(imgWrapper);
    card.appendChild(content);
  
    container.appendChild(card);
  });
  