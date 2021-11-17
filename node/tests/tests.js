// function numberSign(n) {
//   if (typeof(n) !== 'number') return 'add number plz'
//   if (n>0) return 'positivo';
//   if (n<0) return 'negativo';
//   return 'neutro'
// }

// const { expect } = require('chai');

// describe('executa a func numberSign', () => {
//   describe('quando n > 0', () => {
//     describe('a resp', () => {
//       it('e uma "string"', () => {
//         const res = typeof(numberSign(2));

//         expect(res).to.be.equals('string')
//       });

//       it('e igual a "positivo"', () => {
//         const res = numberSign(2);

//         expect(res).to.be.equals('positivo')
//       });
//     });
//   });
//   describe('quando n < 0', () => {
//     describe('a resp', () => {
//       it('e uma string', () => {
//         const res = typeof(numberSign(-2));

//         expect(res).to.be.equal('string')
//       });

//       it('e igual a negativo', () => {
//         const res = numberSign(-2);

//         expect(res).to.be.equal('negativo')
//       });
//     });
//   });
//   describe('quando n = 0', () => {
//     describe('a resp', () => {
//       it('e uma string', () => {
//         const res = typeof(numberSign(-2));

//         expect(res).to.be.equal('string')
//       });

//       it('e igual a neutro', () => {
//         const res = numberSign(0);

//         expect(res).to.be.equal('neutro')
//       });
//     });
//   });

//   describe('quando param ! number', () => {
//     describe('a resposta', () => {
//       it('e uma string', () => {
//         const res = typeof(numberSign('AAA'))

//         expect(res).to.be.equal('string')
//       });

//       it('e igual a "add number plz"', () => {
//         const res = numberSign('AAA');

//         expect(res).to.be.equal('add number plz');
//       })
//     })
//   })
// })


const fs = require('fs');
// const { expect } = require('chai');


async function writeFile(a, b) {
  const fileContent = 'LoremIpsumLoreSa'
  
  await fs.writeFileSync(a, b)

  return 'ok';
}

describe('exec a func writeFile', () =>{
  describe('a resp', () => {
    it('e uma string', () => {
      const res = writeFile('./arquivo.txt', '#VQV conteudo');

      expect(res).to.be.a('string');
    });

    it('e igual a "ok"', () => {
      const res = writeFile('./arquivo.txt', "$VQV conteudo");
 
      expect(res).to.be.equals('ok');
    });
  });
});

writeFile('./fileTest.txt', 'lOremIpsasodiahds')