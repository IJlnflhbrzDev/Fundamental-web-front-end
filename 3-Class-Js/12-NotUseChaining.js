// SEBELUM MEMAKAI GAYA CHAINING
class FruitDelivery {
     constructor() {
          this.client = null;
          this.fruit = null;
     }

     setFruit(nameFruit) {
          this.fruit = nameFruit;

     }

     setClient ( namaClient ) {
          this.client = namaClient;

     }

     infoFruitDelivery() {
          console.log(` Buah ${this.fruit} telah di beli dengan ${this.client} `);
     }

}

const infoFruitDelivery = new FruitDelivery();
infoFruitDelivery.setClient('Naufal');
infoFruitDelivery.setFruit("Apel");
infoFruitDelivery.infoFruitDelivery()

const infoTerbaru = new FruitDelivery();
infoTerbaru.setClient('ijlal');
infoTerbaru.setFruit("anggur");
infoTerbaru.infoFruitDelivery()

