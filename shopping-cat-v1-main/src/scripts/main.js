import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"

// 貓咪加購按鈕

const btn = document.querySelectorAll('.btn');

let cats = {}

btn.forEach((elm) => elm.addEventListener('click', function(e){
    const catName = e.target.closest('div').firstElementChild.textContent;
    const catPrice = e.target.closest('div').firstChild.nextSibling.nextSibling.nextSibling.textContent

    //去找 被創建出來的 tr 標籤 有沒有 id 為貓咪名字，有的話，代表在 td 裡已經有該貓咪的 tr 了，所以刪除掉，下面再創一個有新資訊的新欄位。
    if (document.querySelector(`#${catName}`)) {
        document.querySelector(`#${catName}`).remove()
    }

    //如果 cats物件裡沒有東西，那就在 cats物件裡做出，一個新的貓咪名字物件，內含名字價格等資訊。
    if ((cats[`${catName}`] === undefined)) {
        cats[`${catName}`] = {}
        cats[`${catName}`].name = `${catName}`
        cats[`${catName}`].price = `${catPrice}`
        cats[`${catName}`].count = 1
        cats[`${catName}`].total = Number((cats[`${catName}`].price).split('$').join(''))
    //如果 cats物件裡同名的物件，就改變 count 跟 total 的值。
    } else {
        cats[`${catName}`].count = Number(cats[`${catName}`].count) + 1;
        cats[`${catName}`].total = Number((cats[`${catName}`].price).split('$').join('')) * cats[`${catName}`].count;       
    }

    // 貓咪購物欄位
    const tr = `<tr id="${catName}">
                    <td>${cats[`${catName}`].name}</td>
                    <td><input type="number" class="quantity" value="${cats[`${catName}`].count}" /></td>
                    <td>${cats[`${catName}`].price}</td>
                    <td id="total">${cats[`${catName}`].total}</td>
                    <td>
                        <button class="remove-item-btn btn btn-danger btn-sm">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>`
    //在 tbody 裡插入 tr
    document.querySelector('tbody').insertAdjacentHTML('afterbegin', tr);
}))

         






// 刪除欄位 DONE

const removeItem = document.querySelectorAll('.remove-item-btn');
const removeItemIcon = document.querySelectorAll('.fa-trash-alt')
const removeBtn = (e) => { 
    e.target.parentNode.parentNode.remove() 
}
const removeBtnIcon = (e) => { e
    .target.parentNode.parentNode.parentNode.remove() 
}

removeItem.forEach(function(btn) { btn.addEventListener('click', removeBtn) })
removeItemIcon.forEach(function(btn) { btn.addEventListener('click', removeBtnIcon) })

//總價顯示
const total = document.querySelector(".total-price")
const sum = document.querySelectorAll(".sum")


