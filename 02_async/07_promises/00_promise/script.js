const delivery = new Promise(handleDelivery);

function handleDelivery(sucess, failure) {
  setTimeout(() => {
    sucess();
  }, 5000);
}

console.log(delivery);