
// KETIKA MEMAKAI GAYA CHAINING
class FruitDelivery {
     constructor() {
          this.client = null;
          this.fruit = null;
     }

     setFruit(nameFruit) {
          this.fruit = nameFruit;
          return this;
     }

     setClient ( namaClient ) {
          this.client = namaClient;
          return this;
     }

     infoFruitDelivery() {
          console.log(` Buah ${this.fruit} telah di beli dengan ${this.client} `);
          return this;
     }

}

/*
      Dengan pola method chaining, kita dapat membuat kode menjadi seperti ini:
      jadi tidak perlu lagi mengunakan code sebelumnya yaitu seperti ini

      const infoFruitDelivery = new FruitDelivery();
      infoFruitDelivery.setClient('Naufal');
      infoFruitDelivery.setFruit("Apel");
      infoFruitDelivery.infoFruitDelivery()

      Cukup Seperti code di bawah  ini saja mudah kan?
*/
const infoFruitDelivery = new FruitDelivery()
     .setClient("ijlal")
     .setFruit("watermellon")
     .infoFruitDelivery();



