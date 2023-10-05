'use strict'


const UserBlock = document.querySelector('.user')
const userName = document.querySelector('.login-name');
const UserPin = document.querySelector('.login-pin');
const LoginBtn = document.querySelector('.login-btn');
const pageName = document.querySelector('.page')
const html = document.querySelector('.app');
const secondy = document.querySelector('.sec-section');
const header = document.querySelector('.header');
const group = document.querySelector('.group');
const PayNow = document.querySelector('.pay-btn');
const transfer = document.querySelector('.transfer');
const CurrencyExchange = document.querySelector('.exchange');
const Convert = document.querySelector('.convert');
const LoanMoney = document.querySelector('.loan');
const loanBtn =document.querySelector('.loan-btn');
const RequestloanBtn = document.querySelector('.loanBtn');
const labelLoanAmount = document.querySelector('.loan-amount');
const labelText = document.querySelector('.input__username');
const ReciverName = document.querySelector('.reciver');
const eurBalance = document.querySelector('.eur');
const usdBalance = document.querySelector('.usd');
const gbpBalance = document.querySelector('.gbp');
const ConatinerMovement = document.querySelector('.movements_one');
const transferBtn = document.querySelector('.transfer-btn');
const labelMoney = document.querySelector('.common');
const labelAmount = document.querySelector('.input_amount');
const selection = document.querySelector('.groupA');
const selectionB = document.querySelector('.groupB');
const selectionC = document.querySelector('.groupC');
const selectionD = document.querySelector('.groupD');
const Exchange = document.querySelector('.convert');
const setBtn = document.querySelector('.fix')
const setBtna = document.querySelector('.fixa')
const setBtnb = document.querySelector('.fixb')
const exchangeBtn =  document.querySelector('.convert-Btn');
const labelExchange = document.querySelector('.input_exchange');
const ExchangedRate = document.querySelector('.exchanged');
const HomeBtn = document.querySelector('.Home-btn');
const LogOut = document.querySelector('.log-out');



const account1 = {
    owner:'TANVIR HOSSAIN',
    pin: 1111,
    movementsUSD: [200, 300, -200,70000 ],
    movementsEUR: [3000, 900, -200,50000 ],
    movementsGBP: [6000, 520, -230, 40000],
    totalmovement: [],
    totalsign: [],
    imag: 'img/th.jpg',
    id:443424,
    // totalmovement: [this.movementsUSD,...this.movementsEUR,this.movementsGBP],
};

const account2 = {
    owner: 'MARSY MAE',
   
    pin: 2222,
    movementsUSD: [2100, 390, -250, -100,40000],
    movementsEUR: [100, 940, -200,30000 ],
    movementsGBP: [104, 620, -260, 20000 ],
    totalmovement: [],
    totalsign: [],
    imag: 'img/maddy.jpg',
    id:656435,
};

const account3 = {
    owner: 'SHAFI RAHMAN MENDDI',
   
    pin: 3333,
    movementsUSD: [910, 320, -450, 3000],
    movementsEUR: [100, 940, -200, 3000],
    movementsGBP: [104, 620, -260,4500 ],
    totalmovement: [],
    totalsign: [],
    imag: 'img/sofi.jpg',
    id: 234467,
    // img: `<div class="customer-pic"><img class="pic"src="img/sofi.jpg" alt=""></div>`
}

const account = [account1, account2, account3,]



// // Elements


// ACTIONS---------------------------------------


PayNow.addEventListener('click',function(e){
    e.preventDefault();
    group.style.display = 'none';
     transfer.style.display = 'block';
     pageName.textContent = '💸 PAY NOW';
     header.textContent = 'Send Your Money';
     Convert.style.display = 'none';
     LoanMoney.style.display = 'none';
});

CurrencyExchange.addEventListener('click',function(e){
    e.preventDefault();
    transfer.style.display = 'none';
    pageName.textContent = '💱 CURRENCY EXCHANGE';
    header.textContent = 'Exhange your currency';
    group.style.display = 'none';
    Convert.style.display = 'block';
    LoanMoney.style.display = 'none';
});

loanBtn.addEventListener('click',function(e){
    e.preventDefault();
    transfer.style.display = 'none';
    pageName.textContent = '💰LOAN';
    header.textContent = 'Request for loan';
    group.style.display = 'none';
    Convert.style.display = 'none';
    LoanMoney.style.display = 'block';

});

HomeBtn.addEventListener('click', function(){
    transfer.style.display = 'none';
    pageName.textContent = '🏠 HOME';
    header.textContent = 'Request for loan';
    group.style.display = 'block';
    Convert.style.display = 'none';
    LoanMoney.style.display = 'none';

})




const createUserName = function(accs){
    accs.forEach((acc)=>{
        acc.username = acc.owner.split(' ').map(name => name[0]).join('').toLowerCase()
    })
 }
 createUserName(account);

  


const Balance = function(accs){
  let EurBalance =  accs.movementsEUR.reduce((strt, cur) => strt + cur );
  eurBalance.textContent = `EUR ${EurBalance.toFixed(2)}`;
   accs.EBalance = EurBalance ;

  const USDBalance =  accs.movementsUSD.reduce((strt, cur) => strt + cur );
  usdBalance.textContent = `USD ${USDBalance.toFixed(2)}`;
    accs.UBalance = USDBalance;

  const GBPBalance =  accs.movementsGBP.reduce((strt, cur) => strt + cur );
  gbpBalance.textContent = `GBP ${GBPBalance.toFixed(2)}`;
    accs.GBalance = GBPBalance;
};



    const DisplayMove = function(accs){
       ConatinerMovement.innerHTML = '';
            
        accs.totalsign.forEach((x, i)=>{
         const t =   x.split('').map(cur => cur)
        console.log(t)
   
            const type = t[0] === '-' ? 'withdraw' : 'deposited';

          const  html = `<div class="movements_row">
                    <div class="${type}">${i+1} ${type}</div>
                   <div class="money ">${x}</div>
                    </div> `;

                    ConatinerMovement.insertAdjacentHTML('afterbegin', html) 
                 })
    
    }


  
   
 const UpdateUI = function(){
    Balance(CurrentAccount);
    DisplayMove(CurrentAccount);
  
}


    let CurrentAccount;
    LoginBtn.addEventListener('click',function(e){
        e.preventDefault();
        CurrentAccount = account.find(acc => acc.username === userName.value)
        if(CurrentAccount.pin === Number(UserPin.value)){
            html.style.display = 'none';
             UserBlock.innerHTML = `  <div class="customer-pic "><img src="${CurrentAccount.imag}" alt=""></div>
             <div class="customer-info">
                 <span class="name">${CurrentAccount.owner}</span>
                 <span class="csId">Customer ID: ${CurrentAccount.id}</span>
             </div>`
            UpdateUI();
           return secondy.style.display = 'block'
        }

       
    });

    LogOut.addEventListener('click',function(){
        secondy.style.display = 'none';
     html.style.display = 'block';
     ReciverName.style.display = 'none';
    })

    let b;
    const changeCard = function(){
         b = account.find(acc => acc.username === labelText.value)
        var value = selection.options[selection.selectedIndex].value;
        ReciverName.innerHTML = `  <h4 style="text-align: center;letter-spacing: 2px;">Payment Successful✅</h4>
                    <div class="customer-pic"><img class="pic"src="${b.imag}" alt=""></div>
                    <div class="customer-info">
                        <span class="name rcv-name"style="font-size:10px;">${b.owner} recieved 
                        ${labelAmount.value} ${value}</span>
                        
                    </div>`
    }


let recieverAcc;
    transferBtn.addEventListener('click', function(e){
        e.preventDefault();
      ConatinerMovement.innerHTML = '';
       recieverAcc = account.find(acc => acc.username === labelText.value)
      console.log(recieverAcc)
      const addTransfer = function(accs){
          var value = selection.options[selection.selectedIndex].value;
         
              
              if( value === '€' && accs.EBalance > labelAmount.value &&  labelAmount.value > 0 
              && recieverAcc.username === labelText.value && recieverAcc !== CurrentAccount) {
                 accs.movementsEUR.push(-labelAmount.value);
                 accs.totalsign.push(`${-labelAmount.value}${value}`);
                 recieverAcc.movementsEUR.push(Number(labelAmount.value))
                 recieverAcc.totalsign.push(`${labelAmount.value}${value}`);
                 changeCard();
               
              }else if(value === '$' && accs.UBalance > labelAmount.value &&  labelAmount.value > 0 
              && recieverAcc.username === labelText.value && recieverAcc !== CurrentAccount){
                  recieverAcc.movementsUSD.push(Number(labelAmount.value));
                  accs.movementsUSD.push(-labelAmount.value)
                  accs.totalsign.push(`${-labelAmount.value}${value}`);
                  recieverAcc.totalsign.push(`${labelAmount.value}${value}`);
                  changeCard();
          
              }else if(value === '£' && accs.GBalance > labelAmount.value &&  labelAmount.value > 0
               && recieverAcc.username === labelText.value && recieverAcc !== CurrentAccount){
                  accs.movementsGBP.push(-labelAmount.value);
                  accs.totalsign.push(`${-labelAmount.value}${value}`);
                  recieverAcc.movementsGBP.push(Number(labelAmount.value))
                  recieverAcc.totalsign.push(`${labelAmount.value}${value}`);
                  changeCard();
              }
              };
              addTransfer(CurrentAccount);
              UpdateUI()
   labelAmount.value = '';
   labelText.value = '';
    });
  
   RequestloanBtn.addEventListener('click',function(e){
     
      // ConatinerMovement.innerHTML = '';
      e.preventDefault();
  const addLoan = function(accs){
      
      var valuey = selectionB.options[selectionB.selectedIndex].value
      if( valuey === '€' && accs.EBalance > labelLoanAmount.value ){
         accs.movementsEUR.push(Number(labelLoanAmount.value))
         accs.totalsign.push(`${+labelLoanAmount.value}${valuey}`)
      
      }else if(valuey === '$' && accs.UBalance > labelLoanAmount.value){
         
          accs.movementsUSD.push(Number(labelLoanAmount.value))
          accs.totalsign.push(`${+labelLoanAmount.value}${valuey}`)
      
  
      }else if(valuey === '£' && accs.GBalance > labelLoanAmount.value){
          accs.movementsGBP.push(Number(labelLoanAmount.value));
          accs.totalsign.push(`${+labelLoanAmount.value}${valuey}`)
       
  }};
  setTimeout(()=>{
    addLoan(CurrentAccount);
   UpdateUI()},1000);

 
     });


   
   
labelText.onkeyup = function(){
     
  const b = account.find(acc => acc.username === labelText.value)
    if(labelText.value !== CurrentAccount.username && account.find(acc => acc.username === labelText.value)){
   document.querySelector('.pic').src = `${b.imag}`;
   document.querySelector('.rcv-name').innerHTML = `${b.owner}`
        ReciverName.style.display = 'block';
        ReciverName.innerHTML = ` <h3 style="text-align: center;letter-spacing: 2px;">Reciever📥</h3>
        <div class="customer-pic"><img class="pic"src="${b.imag}" alt=""></div>
        <div class="customer-info">
            <span class="name rcv-name">${b.owner}</span>
            <span class="csId">Customer ID: 69669034</span>
        </div>`
    
    }else{
      
            ReciverName.style.display = 'none';
        }
       
    } 
   



console.log(selectionC.length)

 let currencyOption = Array.from(selectionC.options).map(option => option.value)
 console.log(currencyOption)

  selectionC.addEventListener("change", () =>{
        const selectedCurrency = selectionC.value;
        selectionD.innerHTML = currencyOption.filter(option => option !== selectedCurrency).
        map(option => `<option value="${option}">${option}</option>`).join("");

     });


     
 let convertedValue;
labelExchange.addEventListener('input',()=>{
var valueC = selectionC.options[selectionC.selectedIndex].value;
var valueD = selectionD.options[selectionD.selectedIndex].value;
console.log(valueC,valueD)
if(valueC === 'EUR' && valueD === 'USD' ){
    var convertedValue = labelExchange.value * 1.3;
        }
else if(valueC === 'USD' && valueD === 'EUR' ){
    var convertedValue = labelExchange.value * 0.7;
    console.log(convertedValue)}

    else if(valueC === 'USD' && valueD === 'GBP'){
        var convertedValue = labelExchange.value * 0.87;
        console.log(convertedValue)}

        else if(valueC === 'EUR' && valueD === 'GBP' ){
            var convertedValue = labelExchange.value * 0.87;
            console.log(convertedValue)}

 else if(valueC === 'GBP' && valueD === 'USD' ){
   var convertedValue = labelExchange.value * 1.22;
      console.log(convertedValue)}

 else if(valueC === 'GBP' && valueD === 'EUR'){
     var convertedValue = labelExchange.value * 1.15;
         console.log(convertedValue)}
    
ExchangedRate.innerHTML = `${labelExchange.value} ${valueC} = ${convertedValue.toFixed(2)} ${valueD}`;

 })

 exchangeBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    var valueC = selectionC.options[selectionC.selectedIndex].value;
    var valueD = selectionD.options[selectionD.selectedIndex].value;


   const EURUSD = valueC === 'EUR' && valueD === 'USD' && labelExchange.value < CurrentAccount.EBalance;
   const EURGBP = valueC === 'EUR' && valueD === 'GBP' && labelExchange.value < CurrentAccount.EBalance;
   const USDEUR = valueC === 'USD' && valueD === 'EUR' && labelExchange.value < CurrentAccount.UBalance;
   const USDGBP = valueC === 'USD' && valueD === 'GBP' && labelExchange.value < CurrentAccount.UBalance;
   const GBPEUR = valueC === 'GBP' && valueD === 'EUR' && labelExchange.value < CurrentAccount.GBalance;
   const GBPUSD = valueC === 'GBP' && valueD === 'EUR' && labelExchange.value < CurrentAccount.GBalance;


   if(EURUSD){
    CurrentAccount.movementsUSD.push(Number(labelExchange.value * 1.3))
    CurrentAccount.movementsEUR.push(-labelExchange.value)
    console.log('ok')
   }
   if(EURGBP){
    CurrentAccount.movementsGBP.push(Number(labelExchange.value * 0.87))
    CurrentAccount.movementsEUR.push(-labelExchange.value)
   }
   if(USDEUR){
    CurrentAccount.movementsEUR.push(Number(labelExchange.value * 0.7))
    CurrentAccount.movementsUSD.push(-labelExchange.value)
   }
   if(USDGBP){
    CurrentAccount.movementsGBP.push(Number(labelExchange.value * 0.87))
    CurrentAccount.movementsUSD.push(-labelExchange.value)
   }
   if(GBPEUR){
    CurrentAccount.movementsEUR.push(Number(labelExchange.value * 1.15))
    CurrentAccount.movementsGBP.push(-labelExchange.value)
   }
   if(GBPUSD){
    CurrentAccount.movementsUSD.push(Number(labelExchange.value * 1.22))
    CurrentAccount.movementsGBP.push(-labelExchange.value)
   }
   Balance(CurrentAccount)
})








