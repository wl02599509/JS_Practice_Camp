import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"

// 貓咪按鈕

const btn = document.querySelectorAll('.btn');
const quantity = document.querySelector('.quantity');
let cats = {}

btn.forEach((elm) => elm.addEventListener('click', function(e){
    const catName = e.target.closest('div').firstElementChild.textContent;

    const catPrice = e.target.closest('div').firstChild.nextSibling.nextSibling.nextSibling.textContent

    const tr = `<tr>
                <td>${catName}</td>
                <td><input type="number" class="quantity" value="1" /></td>
                <td>${catPrice}</td>
                <td id="total">$20</td>
                <td>
                    <button class="remove-item-btn btn btn-danger btn-sm">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>`
    
    // if (abc) {
    //     quantity.value = Number(quantity.value) + 1
    // } 
    // else  {
        document.querySelector('tbody').insertAdjacentHTML('afterbegin', tr)
    // }
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


