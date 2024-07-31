const listOfCategories = document.querySelector('#categories');
const listOfItems = listOfCategories.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItems.length}`);

listOfItems.forEach(element =>
{
    const listOfTitles = element.querySelector('h2');
    const listOfElements = element.querySelectorAll('ul li');
    console.log(`Category: ${listOfTitles.textContent}`);
    console.log(`Elements: ${listOfElements.length}`);
     
}
    );

///////////////////////////////====================///////////////////////////////////

const styles = document.createElement('style');
styles.textContent =
   `
   ul{
          padding-left: 0;
      } 
  #categories{
         list-style-type: none;
       padding: 24px;
        width: 440px;
    }
   #categories .item{
        background: #F6F6FE;
        
        padding: 20px;
         margin: 20px;
     }
   #categories ul{
         list-style-type: none;
         }
   #categories .item li{
        border: 1px solid rgba(46, 47, 66, 0.4);
        border-radius: 4px;
        margin: 10px;
     }
 `;
document.head.append(styles);

