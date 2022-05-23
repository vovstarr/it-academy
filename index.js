import { productsLaptops, productsPhones, productsSmartWatch, productsDisplay, productsTV } from './catalog.js';
import { autoSlider } from './slider.js'


let wrapper = document.getElementById('wrapper');
// фон
let box = document.createElement('div');                 box.classList.add('box');

box.innerHTML = `
<div>虎</div>
<div>お</div>
<div>ぱ</div>
<div>尻</div>
<div>私</div>
<div>素</div>
<div>か</div>
<div>線</div>
<div>愛</div>
<div>ら</div>
`;
// хедер
let header = document.createElement('section');          header.classList.add('header');
let logo = document.createElement('div');                logo.classList.add('headerLogo');
let input = document.createElement('div');               input.classList.add('headerInput');
let darknessWrapper = document.createElement('div');     darknessWrapper.classList.add('darknessWrapper');
let searchResult = document.createElement('div');        searchResult.classList.add('searchResult');
// let darknessWrapper = document.createElement('div');    darknessWrapper.classList.add('darknessWrapper');
// центральная секция
let sectionMain = document.createElement('section');     sectionMain.classList.add('sectionMain');
let aside = document.createElement('div');               aside.classList.add('aside');
let previewList = document.createElement('div');         previewList.classList.add('previewList');
let productsList = document.createElement('div');        productsList.classList.add('productsList');
let imgPreview = document.createElement('img');          imgPreview.classList.add('imgPreview');
imgPreview.setAttribute('src', './img/preview.png');
// слайдер
let sliderContainer = document.createElement('section'); sliderContainer.classList.add('sliderContainer');
// кнопушки для aside
let category = document.createElement('div');            category.classList.add('category');
let buttonLaptops = document.createElement('div');       buttonLaptops.classList.add('buttonLaptops');
let buttonPhones = document.createElement('div');        buttonPhones.classList.add('buttonPhones');
let buttonWatch = document.createElement('div');         buttonWatch.classList.add('buttonWatch');
let buttonScreens = document.createElement('div');       buttonScreens.classList.add('buttonScreens');
let buttonTV = document.createElement('div');            buttonTV.classList.add('buttonTV');

// логотип и поиск
let aLogo = document.createElement('a');                 aLogo.classList.add('logo');
let serch = document.createElement('input');             serch.classList.add('input');
aLogo.setAttribute('href', 'index.html');
aLogo.append('ΛΤΘΜ95');
serch.setAttribute('type', 'text');                      serch.setAttribute('placeholder', 'just write what you want bro..');
logo.append(aLogo);
input.append(serch);

category.append('Category:');
buttonLaptops.append('Laptops');
buttonPhones.append('Phones');
buttonWatch.append('Smart Watch');
buttonScreens.append('Display');
buttonTV.append('TV');

previewList.append(imgPreview);
header.append(logo, input);   
sectionMain.append(aside, previewList, productsList);
aside.append(category, buttonLaptops, buttonPhones, buttonWatch, buttonScreens, buttonTV);

//хедер для сортировки 
function createProductHeader() {
    
    let productHeader = document.createElement('div');     productHeader.classList.add('productHeader');
    //кнопушки для сортировки
    productHeader.innerHTML = `
    <div class="bottonSorting">Sorting By:</div>
    <div class="sortPS">Price ⇪</div>
    <div class="sortPB">Price ⇩</div>
    <div class="sortSS">Screen ⇪</div>
    <div class="sortSB">Screen ⇩</div>
    `; 
    
    return productHeader;
}
//сортировка по цене
function sortPS(temp, productContainer, productsList, productHeader) {
    temp.sort((a, b) => a.price > b.price ? -1 : 1); 
    productContainer = fillingTheClockArray(temp);
    productsList.innerHTML = '';
    productsList.append(productHeader, productContainer);
}

function sortPB(temp, productContainer, productsList, productHeader) {
    temp.sort((a, b) => a.price < b.price ? -1 : 1); 
    productContainer = fillingTheClockArray(temp);
    productsList.innerHTML = '';
    productsList.append(productHeader, productContainer);
}
//сортировка по размеру экрана
function sortSS(temp, productContainer, productsList, productHeader) {
    temp.sort((a, b) => a.screenSize > b.screenSize ? -1 : 1); 
    productContainer = fillingTheClockArray(temp);
    productsList.innerHTML = '';
    productsList.append(productHeader, productContainer);
}

function sortSB(temp, productContainer, productsList, productHeader) {
    temp.sort((a, b) => a.screenSize < b.screenSize ? -1 : 1); 
    productContainer = fillingTheClockArray(temp);
    productsList.innerHTML = '';
    productsList.append(productHeader, productContainer);
}
//массивы товаров
function laptops() {
    const temp = JSON.parse(JSON.stringify(productsLaptops));
    
    let productContainer = fillingThelaptopsArray(temp);
   
    productsList.innerHTML = '';
        
    let productHeader = createProductHeader();
    
    productsList.append(productHeader, productContainer);
    
    document.querySelector('.sortPS').addEventListener('click', () => {sortPS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortPB').addEventListener('click', () => {sortPB(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSS').addEventListener('click', () => {sortSS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSB').addEventListener('click', () => {sortSB(temp, productContainer, productsList, productHeader)});   
}

function phones() {
    const temp = JSON.parse(JSON.stringify(productsPhones));
    
    let productContainer = fillingThephonesArray(temp);
   
    productsList.innerHTML = '';
        
    let productHeader = createProductHeader();
    
    productsList.append(productHeader, productContainer);
    
    document.querySelector('.sortPS').addEventListener('click', () => {sortPS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortPB').addEventListener('click', () => {sortPB(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSS').addEventListener('click', () => {sortSS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSB').addEventListener('click', () => {sortSB(temp, productContainer, productsList, productHeader)}); 
}

function smartWatch() {
    const temp = JSON.parse(JSON.stringify(productsSmartWatch));
    
    let productContainer = fillingTheClockArray(temp);
   
    productsList.innerHTML = '';
        
    let productHeader = createProductHeader();
    
    productsList.append(productHeader, productContainer);
    
    document.querySelector('.sortPS').addEventListener('click', () => {sortPS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortPB').addEventListener('click', () => {sortPB(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSS').addEventListener('click', () => {sortSS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSB').addEventListener('click', () => {sortSB(temp, productContainer, productsList, productHeader)}); 
}

function display() {
    const temp = JSON.parse(JSON.stringify(productsDisplay));
    
    let productContainer = fillingTheDisplayArray(temp);
   
    productsList.innerHTML = '';
        
    let productHeader = createProductHeader();
    
    productsList.append(productHeader, productContainer);
   
    document.querySelector('.sortPS').addEventListener('click', () => {sortPS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortPB').addEventListener('click', () => {sortPB(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSS').addEventListener('click', () => {sortSS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSB').addEventListener('click', () => {sortSB(temp, productContainer, productsList, productHeader)}); 
}

function TV() {
    const temp = JSON.parse(JSON.stringify(productsTV));
    
    let productContainer = fillingTheTVArray(temp);
   
    productsList.innerHTML = '';
        
    let productHeader = createProductHeader();
    
    productsList.append(productHeader, productContainer);
   
    document.querySelector('.sortPS').addEventListener('click', () => {sortPS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortPB').addEventListener('click', () => {sortPB(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSS').addEventListener('click', () => {sortSS(temp, productContainer, productsList, productHeader)});
    document.querySelector('.sortSB').addEventListener('click', () => {sortSB(temp, productContainer, productsList, productHeader)}); 
}

//заполнение массива ноутбуков
function fillingThelaptopsArray(temp) {
    let productContainer = document.createElement('ul');   productContainer.classList.add('productContainer');
   
    temp.forEach(function(value, index) {

        let product = document.createElement('li');                   product.classList.add('product');
        let productInfo = document.createElement('div');              productInfo.classList.add('productInfo');
        let infoTop = document.createElement('div');                  infoTop.classList.add('infoTop');
        let infoBotton = document.createElement('div');               infoBotton.classList.add('infoBotton');
        let img = document.createElement('img');                      img.classList.add('imgLaptops');
        let name = document.createElement('div');                     name.classList.add('name');
        let model = document.createElement('div');                    model.classList.add('model');
        let year = document.createElement('div');                     year.classList.add('year');
        let price = document.createElement('div');                    price.classList.add('pListPrice');  
        let screenSize = document.createElement('div');               screenSize.classList.add('screenSize');
        let screenResolution = document.createElement('div');         screenResolution.classList.add('screenResolutionL');
        let processorModel = document.createElement('div');
        let processorBaseFrequency = document.createElement('div');   processorBaseFrequency.classList.add('processorBaseFrequency');
        let graphicsAdapter = document.createElement('div');          graphicsAdapter.classList.add('graphicsAdapter');
        let article = document.createElement('div');                  article.classList.add('article');
        let systemMemory = document.createElement('div');             systemMemory.classList.add('systemMemory');
        let storageType = document.createElement('div');              storageType.classList.add('storageType');
        let totalStorageCapacity = document.createElement('div');     totalStorageCapacity.classList.add('totalStorageCapacityL');
        let country = document.createElement('div');                  country.classList.add('country');

        img.src = temp[index].url; 
        name.innerHTML = temp[index].name;
        model.innerHTML = temp[index].model;
        year.innerHTML = temp[index].year;
        price.innerHTML = temp[index].price;
        screenSize.innerHTML = temp[index].screenSize;
        screenResolution.innerHTML = temp[index].screenResolution;
        processorModel.innerHTML = temp[index].processorModel;
        processorBaseFrequency.innerHTML = temp[index].processorBaseFrequency;
        graphicsAdapter.innerHTML = temp[index].graphicsAdapter;
        article.innerHTML = temp[index].article;
        systemMemory.innerHTML = temp[index].systemMemory;
        storageType.innerHTML = temp[index].storageType;
        totalStorageCapacity.innerHTML = temp[index].totalStorageCapacity;
        country.innerHTML = temp[index].country;
    
        productContainer.append(product);
        product.append(img, productInfo, price);
        productInfo.append(infoTop, infoBotton);
        infoTop.append(name, model, year, article);
        infoBotton.append(screenSize, screenResolution, processorModel, processorBaseFrequency, graphicsAdapter);

        function theProductItSelf() {
            wrapper.style.height = '100%';
            productsList.innerHTML = '';
        
            let productItSelf = document.createElement('div');    productItSelf.className = 'productItSelf';
            
            productsList.append(productItSelf);
            infoTop.append(name, model, year, article);
            infoBotton.append(screenSize, screenResolution, processorModel, processorBaseFrequency, systemMemory, storageType, totalStorageCapacity, graphicsAdapter);
            productItSelf.append(img, infoTop, infoBotton, price, country);
        }

        product.addEventListener('click', theProductItSelf);
    });

    return productContainer;
}
//заполнение массива телефонов
function fillingThephonesArray(temp) {
    let productContainer = document.createElement('ul');   productContainer.classList.add('productContainer');
    
    temp.forEach(function(item, index) {
         
        let product = document.createElement('li');                 product.classList.add('product');
        let productInfo = document.createElement('div');            productInfo.classList.add('productInfo');
        let infoTop = document.createElement('div');                infoTop.classList.add('infoTop');
        let infoBotton = document.createElement('div');             infoBotton.classList.add('infoBotton');
        let img = document.createElement('img');                    img.classList.add('imgPhones');
        let name = document.createElement('div');
        let model = document.createElement('div');
        let screenSize = document.createElement('div');             screenSize.classList.add('screenSize');
        let year = document.createElement('div');
        let price = document.createElement('div');                  price.classList.add('pListPrice');
        let screenResolution = document.createElement('div');       screenResolution.classList.add('screenResolution');
        let type = document.createElement('div');                   type.classList.add('type');
        let color = document.createElement('div');                  color.classList.add('color');
        let totalStorageCapacity = document.createElement('div');   totalStorageCapacity.classList.add('totalStorageCapacity');
        let platform = document.createElement('div');               platform.classList.add('platform');
        let processorModel = document.createElement('div');         processorModel.classList.add('processorModel');
        let systemMemory = document.createElement('div');           systemMemory.classList.add('systemMemory');
        let camera = document.createElement('div');                 camera.classList.add('camera');
        let battery = document.createElement('div');                battery.classList.add('battery');
        let country = document.createElement('div');                country.classList.add('country');

        img.src = temp[index].url;
        name.innerHTML = temp[index].name;
        model.innerHTML = temp[index].model;
        year.innerHTML = temp[index].year;
        price.innerHTML = temp[index].price;
        screenSize.innerHTML = temp[index].screenSize;
        screenResolution.innerHTML = temp[index].screenResolution;
        type.innerHTML = temp[index].type;
        color.innerHTML = temp[index].color;
        totalStorageCapacity.innerHTML = temp[index].totalStorageCapacity;
        platform.innerHTML = temp[index].platform;
        processorModel.innerHTML = temp[index].processorModel;
        systemMemory.innerHTML = temp[index].systemMemory;
        camera.innerHTML = temp[index].camera;
        battery.innerHTML = temp[index].battery;
        country.innerHTML = temp[index].country;
        
        productContainer.append(product);
        product.append(img, productInfo, price);
        productInfo.append(infoTop, infoBotton);
        infoTop.append(type, name, model, color, totalStorageCapacity);
        infoBotton.append(screenSize, screenResolution, year);
        
        function theProductItSelf() {
            wrapper.style.height = '100%';
            productsList.innerHTML = '';

            let productItSelf = document.createElement('div');    productItSelf.classList.add('productItSelf');

            productsList.append(productItSelf); 
            productItSelf.append(img, infoTop, infoBotton, price, country);
            infoTop.append(name, model, year, type, color);
            infoBotton.append(platform, screenSize, screenResolution, processorModel, systemMemory, totalStorageCapacity, camera, battery);
        }
    
        product.addEventListener('click', theProductItSelf);
    });

    return productContainer;
}
//заполнение массива часов
function fillingTheClockArray(temp) {
    let productContainer = document.createElement('ul');   productContainer.classList.add('productContainer');

    temp.forEach(function(item, index) {
         
        let product = document.createElement('li');                 product.classList.add('product');
        let productInfo = document.createElement('div');            productInfo.classList.add('productInfo');
        let infoTop = document.createElement('div');                infoTop.classList.add('infoTop');
        let infoBotton = document.createElement('div');             infoBotton.classList.add('infoBotton');
        let img = document.createElement('img');                    img.classList.add('imgPhones');
        let name = document.createElement('div');
        let model = document.createElement('div');
        let screenSize = document.createElement('div');             screenSize.classList.add('screenSize');
        let year = document.createElement('div');
        let price = document.createElement('div');                  price.classList.add('pListPrice');
        let screenResolution = document.createElement('div');       screenResolution.classList.add('screenResolution');
        let type = document.createElement('div');                   type.classList.add('type');
        let color = document.createElement('div');                  color.classList.add('color');
        let totalStorageCapacity = document.createElement('div');   totalStorageCapacity.classList.add('totalStorageCapacity');
        let platform = document.createElement('div');               platform.classList.add('platform');
        let systemMemory = document.createElement('div');           systemMemory.classList.add('systemMemory');
        let battery = document.createElement('div');                battery.classList.add('battery');
        let country = document.createElement('div');                country.classList.add('country');
        let workingHours = document.createElement('div');           workingHours.classList.add('workingHours');

        img.src = temp[index].url;
        name.innerHTML = temp[index].name;
        model.innerHTML = temp[index].model;
        year.innerHTML = temp[index].year;
        price.innerHTML = temp[index].price;
        screenSize.innerHTML = temp[index].screenSize;
        screenResolution.innerHTML = temp[index].screenResolution;
        type.innerHTML = temp[index].type;
        color.innerHTML = temp[index].color;
        totalStorageCapacity.innerHTML = temp[index].totalStorageCapacity;
        platform.innerHTML = temp[index].platform;
        systemMemory.innerHTML = temp[index].systemMemory;
        battery.innerHTML = temp[index].battery;
        country.innerHTML = temp[index].country;
        workingHours.innerHTML = temp[index].workingHours;
        
        productContainer.append(product);
        product.append(img, productInfo, price);
        productInfo.append(infoTop, infoBotton);
        infoTop.append(type, name, model, color, totalStorageCapacity);
        infoBotton.append(screenSize, screenResolution, year);
        
        function theProductItSelf() {
            wrapper.style.height = '100%';
            productsList.innerHTML = '';

            let productItSelf = document.createElement('div');    productItSelf.classList.add('productItSelf');

            productsList.append(productItSelf); 
            productItSelf.append(img, infoTop, infoBotton, price, country);
            infoTop.append(name, model, year, type, color);
            infoBotton.append(platform, screenSize, screenResolution, systemMemory, totalStorageCapacity, battery, workingHours);
        }
    
        product.addEventListener('click', theProductItSelf);
    });

    return productContainer;
}
//заполнение массива дисплеев
function fillingTheDisplayArray(temp) {
    let productContainer = document.createElement('ul');   productContainer.classList.add('productContainer');

    temp.forEach(function(item, index) {
         
        let product = document.createElement('li');                   product.classList.add('product');
        let productInfo = document.createElement('div');              productInfo.classList.add('productInfo');
        let infoTop = document.createElement('div');                  infoTop.classList.add('infoTop');
        let infoBotton = document.createElement('div');               infoBotton.classList.add('infoBotton');
        let img = document.createElement('img');                      img.classList.add('imgLaptops');
        let name = document.createElement('div');                     name.classList.add('name');
        let price = document.createElement('div');                    price.classList.add('pListPrice');  
        let screenSize = document.createElement('div');               screenSize.classList.add('screenSize');
        let screenResolution = document.createElement('div');         screenResolution.classList.add('screenResolutionL');
        let article = document.createElement('div');                  article.classList.add('article');
        let country = document.createElement('div');                  country.classList.add('country');
        let brightness = document.createElement('div');               brightness.classList.add('brightness');

        img.src = temp[index].url; 
        name.innerHTML = temp[index].name;
        price.innerHTML = temp[index].price;
        screenSize.innerHTML = temp[index].screenSize;
        screenResolution.innerHTML = temp[index].screenResolution;
        article.innerHTML = temp[index].article;
        country.innerHTML = temp[index].country;
        brightness.innerHTML = temp[index].brightness;
    
        productContainer.append(product);
        product.append(img, productInfo, price);
        productInfo.append(infoTop, infoBotton);
        infoTop.append(name, article);
        infoBotton.append(screenSize, screenResolution,);

        function theProductItSelf() {
            wrapper.style.height = '100%';
            productsList.innerHTML = '';
        
            let productItSelf = document.createElement('div');    productItSelf.className = 'productItSelf';
            
            productsList.append(productItSelf);
            infoTop.append(name, article);
            infoBotton.append(brightness, screenSize, screenResolution);
            productItSelf.append(img, infoTop, infoBotton, price, country);
        }

        product.addEventListener('click', theProductItSelf);
    });

    return productContainer;
}
//заполнение массива TV
function fillingTheTVArray(temp) {
    let productContainer = document.createElement('ul');   productContainer.classList.add('productContainer');

    temp.forEach(function(item, index) {
         
        let product = document.createElement('li');                   product.classList.add('product');
        let productInfo = document.createElement('div');              productInfo.classList.add('productInfo');
        let infoTop = document.createElement('div');                  infoTop.classList.add('infoTop');
        let infoBotton = document.createElement('div');               infoBotton.classList.add('infoBotton');
        let img = document.createElement('img');                      img.classList.add('imgLaptops');
        let name = document.createElement('div');                     name.classList.add('name');
        let model = document.createElement('div');                    model.classList.add('model');
        let year = document.createElement('div');                     year.classList.add('year');
        let price = document.createElement('div');                    price.classList.add('pListPrice');  
        let screenSize = document.createElement('div');               screenSize.classList.add('screenSize');
        let screenResolution = document.createElement('div');         screenResolution.classList.add('screenResolutionL');
        let article = document.createElement('div');                  article.classList.add('article');
        let country = document.createElement('div');                  country.classList.add('country');
        let platform = document.createElement('div');                 platform.classList.add('platform');

        img.src = temp[index].url; 
        name.innerHTML = temp[index].name;
        model.innerHTML = temp[index].model;
        year.innerHTML = temp[index].year;
        price.innerHTML = temp[index].price;
        screenSize.innerHTML = temp[index].screenSize;
        screenResolution.innerHTML = temp[index].screenResolution;
        article.innerHTML = temp[index].article;
        country.innerHTML = temp[index].country;
        platform.innerHTML = temp[index].platform;
    
        productContainer.append(product);
        product.append(img, productInfo, price);
        productInfo.append(infoTop, infoBotton);
        infoTop.append(name, model, year, article);
        infoBotton.append(screenSize, screenResolution,);

        function theProductItSelf() {
            wrapper.style.height = '100%';
            productsList.innerHTML = '';
        
            let productItSelf = document.createElement('div');    productItSelf.className = 'productItSelf';
            
            productsList.append(productItSelf);
            infoTop.append(name, model, year, article);
            infoBotton.append(platform, screenSize, screenResolution);
            productItSelf.append(img, infoTop, infoBotton, price, country);
        }

        product.addEventListener('click', theProductItSelf);
    });

    return productContainer;
}

//темная тема для поисковой строки
function DarknessWrapper() {
    function exitDarknessWrapper() {
        darknessWrapper.style.display = 'none';
    }
    
    wrapper.append(darknessWrapper);
    darknessWrapper.style.display = 'block';
    
    darknessWrapper.addEventListener('click', exitDarknessWrapper)
}

input.addEventListener('click', DarknessWrapper);
// футер
let footer = document.createElement('section');     footer.classList.add('footer');
let footerCon = document.createElement('div');      footerCon.classList.add('footerContainer');
let sectionF = document.createElement('div');       sectionF.classList.add('sectionF');
let sectionS = document.createElement('div');       sectionS.classList.add('sectionS');
// sectionF
let about = document.createElement('div');          about.classList.add('about');
about.append('We are in social networks');
let allImgS = document.createElement('div');        allImgS.classList.add('allImgS');
let imgI = document.createElement('img');           imgI.classList.add('imgI');
let imgT = document.createElement('img');           imgT.classList.add('imgT');
let imgF = document.createElement('img');           imgF.classList.add('imgF');
let imgG = document.createElement('img');           imgG.classList.add('imgG');

imgI.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGlkPSJvcmlnaW5hbC1pY29uIiBmaWxsPSIjMmVjYzcxIj48cGF0aCBkPSJNNzIuMzIsMTMuNTZjLTMyLjQwODQsMCAtNTguNzYsMjYuMzUxNiAtNTguNzYsNTguNzZ2ODEuMzZjMCwzMi40MDg0IDI2LjM1MTYsNTguNzYgNTguNzYsNTguNzZoODEuMzZjMzIuNDA4NCwwIDU4Ljc2LC0yNi4zNTE2IDU4Ljc2LC01OC43NnYtODEuMzZjMCwtMzIuNDA4NCAtMjYuMzUxNiwtNTguNzYgLTU4Ljc2LC01OC43NnpNMTY3LjI0LDQ5LjcyYzQuOTcyLDAgOS4wNCw0LjA2OCA5LjA0LDkuMDRjMCw0Ljk3MiAtNC4wNjgsOS4wNCAtOS4wNCw5LjA0Yy00Ljk3MiwwIC05LjA0LC00LjA2OCAtOS4wNCwtOS4wNGMwLC00Ljk3MiA0LjA2OCwtOS4wNCA5LjA0LC05LjA0ek0xMTMsNjMuMjhjMjcuNDM2NCwwIDQ5LjcyLDIyLjI4MzYgNDkuNzIsNDkuNzJjMCwyNy40MzY0IC0yMi4yODM2LDQ5LjcyIC00OS43Miw0OS43MmMtMjcuNDM2NCwwIC00OS43MiwtMjIuMjgzNiAtNDkuNzIsLTQ5LjcyYzAsLTI3LjQzNjQgMjIuMjgzNiwtNDkuNzIgNDkuNzIsLTQ5Ljcyek0xMTMsNzIuMzJjLTIyLjQxOTIsMCAtNDAuNjgsMTguMjYwOCAtNDAuNjgsNDAuNjhjMCwyMi40MTkyIDE4LjI2MDgsNDAuNjggNDAuNjgsNDAuNjhjMjIuNDE5MiwwIDQwLjY4LC0xOC4yNjA4IDQwLjY4LC00MC42OGMwLC0yMi40MTkyIC0xOC4yNjA4LC00MC42OCAtNDAuNjgsLTQwLjY4eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+');
imgT.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMyZWNjNzEiPjxwYXRoIGQ9Ik0yMjYuMjgyNSw0Ny4xNzc1Yy04LjM1MTQxLDMuNzA3ODEgLTE3LjMwMzEyLDYuMTk3MzQgLTI2LjcxMzkxLDcuMzI3MzRjOS42MDUsLTUuNzU1OTQgMTYuOTg1MzEsLTE0Ljg2NjU2IDIwLjQ0NTk0LC0yNS43MDc1Yy04Ljk2OTM4LDUuMzE0NTMgLTE4Ljk0NTE2LDkuMTgxMjUgLTI5LjUyMTI1LDExLjI2NDY5Yy04LjQ3NSwtOS4wNCAtMjAuNTUxODcsLTE0LjY3MjM0IC0zMy45MTc2NiwtMTQuNjcyMzRjLTI1LjY3MjE5LDAgLTQ2LjQ4ODkxLDIwLjc5OTA2IC00Ni40ODg5MSw0Ni40NzEyNWMwLDMuNjM3MTkgMC40MjM3NSw3LjE4NjA5IDEuMjE4MjgsMTAuNTkzNzVjLTM4LjYzMTg3LC0xLjk0MjE5IC03Mi44NjczNCwtMjAuNDQ1OTQgLTk1LjgwMjgxLC00OC41NzIzNGMtNC4wMDc5Nyw2Ljg4NTk0IC02LjI4NTYyLDE0Ljg2NjU2IC02LjI4NTYyLDIzLjM3Njg3YzAsMTYuMTIwMTYgOC4xOTI1LDMwLjM1MTA5IDIwLjY3NTQ3LDM4LjcwMjVjLTcuNjI3NSwtMC4yNDcxOSAtMTQuNzk1OTQsLTIuMzQ4MjggLTIxLjA2MzkxLC01LjgyNjU2YzAsMC4xOTQyMiAwLDAuMzg4NDQgMCwwLjU4MjY2YzAsMjIuNTI5MzggMTYuMDMxODgsNDEuMjk3OTcgMzcuMjcyMzQsNDUuNTg4NDRjLTMuODg0MzcsMS4wNTkzOCAtNy45OTgyOCwxLjYyNDM4IC0xMi4yMzU3OCwxLjYyNDM4Yy0zLjAwMTU2LDAgLTUuOTE0ODQsLTAuMjgyNSAtOC43NTc1LC0wLjg0NzVjNS45MzI1LDE4LjQ1MDc4IDIzLjA5NDM4LDMxLjkyMjUgNDMuNDE2NzIsMzIuMjkzMjhjLTE1Ljg5MDYyLDEyLjQ2NTMxIC0zNS45MzA0NywxOS44ODA5NCAtNTcuNzE4MjgsMTkuODgwOTRjLTMuNzYwNzgsMCAtNy40NTA5NCwtMC4yMTE4NyAtMTEuMDcwNDcsLTAuNjUzMjhjMjAuNTUxODcsMTMuMjA2ODcgNDQuOTg4MTIsMjAuODg3MzQgNzEuMjQyOTcsMjAuODg3MzRjODUuNDkxNTYsMCAxMzIuMjQ1MzEsLTcwLjgxOTIyIDEzMi4yNDUzMSwtMTMyLjIyNzY2YzAsLTIuMDEyODEgLTAuMDUyOTcsLTQuMDQzMjggLTAuMTIzNTksLTYuMDIwNzhjOS4wNzUzMSwtNi41NTA0NyAxNi45NSwtMTQuNzQyOTcgMjMuMTgyNjYsLTI0LjA2NTQ3eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+');
imgF.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMyZWNjNzEiPjxwYXRoIGQ9Ik0xODUuMzIsMTguMDhoLTE0NC42NGMtMTIuNDc1MiwwIC0yMi42LDEwLjEyNDggLTIyLjYsMjIuNnYxNDQuNjRjMCwxMi40NzUyIDEwLjEyNDgsMjIuNiAyMi42LDIyLjZoMTQ0LjY0YzEyLjQ3NTIsMCAyMi42LC0xMC4xMjQ4IDIyLjYsLTIyLjZ2LTE0NC42NGMwLC0xMi40NzUyIC0xMC4xMjQ4LC0yMi42IC0yMi42LC0yMi42ek0xNjcuMjQsODUuODhoLTkuMDRjLTkuNjcyOCwwIC0xMy41NiwyLjI2IC0xMy41Niw5LjA0djEzLjU2aDIyLjZsLTQuNTIsMjIuNmgtMTguMDh2NjcuOGgtMjIuNnYtNjcuOGgtMTguMDh2LTIyLjZoMTguMDh2LTEzLjU2YzAsLTE4LjA4IDkuMDQsLTMxLjY0IDI3LjEyLC0zMS42NGMxMy4xMDgsMCAxOC4wOCw0LjUyIDE4LjA4LDQuNTJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=');
imgG.setAttribute('src', 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGlkPSJvcmlnaW5hbC1pY29uIiBmaWxsPSIjMmVjYzcxIj48cGF0aCBkPSJNMTEzLDkuMDRjLTU3LjMyNzE2LDAgLTEwMy45Niw0Ni42MzI4NCAtMTAzLjk2LDEwMy45NmMwLDU3LjMyNzE2IDQ2LjYzMjg0LDEwMy45NiAxMDMuOTYsMTAzLjk2YzU3LjMyNzE2LDAgMTAzLjk2LC00Ni42MzI4NCAxMDMuOTYsLTEwMy45NmMwLC01Ny4zMjcxNiAtNDYuNjMyODQsLTEwMy45NiAtMTAzLjk2LC0xMDMuOTZ6TTkwLjQsMTU4LjJjLTI0LjkyMzI4LDAgLTQ1LjIsLTIwLjI3NjcyIC00NS4yLC00NS4yYzAsLTI0LjkyMzI4IDIwLjI3NjcyLC00NS4yIDQ1LjIsLTQ1LjJjOC45OTAyOCwwIDE3LjY3NzcyLDIuNjM1MTYgMjUuMTI2NjgsNy42MjA3MmMxLjc1Mzc2LDEuMTc1MiAzLjQ0NDI0LDIuNDkwNTIgNS4wMTcyLDMuOTAwNzZsLTYuMDM4NzIsNi43MjU3NmMtMS4yNTY1NiwtMS4xMyAtMi42MDgwNCwtMi4xNzQxMiAtNC4wMTM3NiwtMy4xMTQyOGMtNS45NDgzMiwtMy45ODY2NCAtMTIuODk1NTYsLTYuMDkyOTYgLTIwLjA5MTQsLTYuMDkyOTZjLTE5LjkzNzcyLDAgLTM2LjE2LDE2LjIyMjI4IC0zNi4xNiwzNi4xNmMwLDE5LjkzNzcyIDE2LjIyMjI4LDM2LjE2IDM2LjE2LDM2LjE2YzE5LjkzNzcyLDAgMzYuMTYsLTE2LjIyMjI4IDM2LjE2LC0zNi4xNmgtMzEuNjR2LTkuMDRoMzkuOTYxMzJsMC40NDc0OCw0LjAyNzMyYzAuMTc2MjgsMS42NDUyOCAwLjI3MTIsMy4zMTc2OCAwLjI3MTIsNS4wMTI2OGMwLDI0LjkyMzI4IC0yMC4yNzY3Miw0NS4yIC00NS4yLDQ1LjJ6TTE4NS4zMiwxMTNoLTEzLjU2djEzLjU2aC05LjA0di0xMy41NmgtMTMuNTZ2LTkuMDRoMTMuNTZ2LTEzLjU2aDkuMDR2MTMuNTZoMTMuNTZ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4=');
// sectionS
let contacts = document.createElement('div');       contacts.classList.add('contacts');
contacts.append('contacts');
let tel = document.createElement('a');              tel.classList.add('tel');
tel.setAttribute('href', 'tel:+375292281337');
tel.append('+375(29) 228 13 37');
let address = document.createElement('div');        address.classList.add('address');
address.append('+375, Main Street, Your City');
sectionS.append(contacts, address, tel);
allImgS.append(imgI, imgT, imgF, imgG);
sectionF.append(about, allImgS); 
footerCon.append(sectionF, sectionS);
footer.append(footerCon);


// скрывает sectionMain
buttonLaptops.addEventListener('click', asidemenu);
buttonPhones.addEventListener('click', asidemenu);
buttonWatch.addEventListener('click', asidemenu);
buttonScreens.addEventListener('click', asidemenu);
buttonTV.addEventListener('click', asidemenu);
buttonLaptops.addEventListener('click', laptops);
buttonPhones.addEventListener('click', phones);
buttonWatch.addEventListener('click', smartWatch);
buttonScreens.addEventListener('click', display);
buttonTV.addEventListener('click', TV);

function asidemenu() {
    previewList.style.display = 'none';
    productsList.style.display = 'flex';
    sliderContainer.style.display = 'none';
    footer.style.display = 'none';
    wrapper.style.height = 'auto';
}

//слайдер
let slider = document.createElement('div');         slider.classList.add('slider');
let sliderL = document.createElement('div');        sliderL.classList.add('sliderL');
sliderContainer.append(slider);
slider.append(sliderL);

sliderL.innerHTML += `
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
    <div>new</div>
`;

autoSlider();

wrapper.append(box, header, sectionMain, sliderContainer, footer);   
