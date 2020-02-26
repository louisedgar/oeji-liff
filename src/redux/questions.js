export function setQuestions(questions) {
  return {
    type: "SET_QUESTIONS",
    payload: questions
  };
}

const initialState = {
  questions: [
    {
      _id: "5e396afa83035c0004f09497",
      text:
        "Dua garis yang sejajar disajikan dalam bentuk matriks sebagai [2 a b -6][x y] = [5 7]. Nilai ab adalah...",
      points: 4,
      choices: [
        {
          _id: "5e396afa83035c0004f09498",
          text: "-12",
          value: true
        },
        {
          _id: "5e396afa83035c0004f09499",
          text: "-3",
          value: false
        },
        {
          _id: "5e396afa83035c0004f0949a",
          text: "0",
          value: false
        },
        {
          _id: "5e396afa83035c0004f0949b",
          text: "12",
          value: false
        },
        {
          _id: "5e396afa83035c0004f0949c",
          text: "21",
          value: false
        }
      ],
      __v: 0
    },
    {
      _id: "5e396b7283035c0004f0949d",
      text:
        "Diketahui gradien garis singgung grafik fungsi f di titik P adalah empat kali negatif absis P. Grafik tersebut melalui titik Q(2,42). Nilai maksimum f sebesar b tercapai di x=a. Nilai 3a+b adalah...",
      points: 4,
      choices: [
        {
          _id: "5e396b7283035c0004f0949e",
          text: "0",
          value: true
        },
        {
          _id: "5e396b7283035c0004f0949f",
          text: "34",
          value: false
        },
        {
          _id: "5e396b7283035c0004f094a0",
          text: "48",
          value: false
        },
        {
          _id: "5e396b7283035c0004f094a1",
          text: "50",
          value: false
        },
        {
          _id: "5e396b7283035c0004f094a2",
          text: "60",
          value: false
        }
      ],
      __v: 0
    },
    {
      _id: "5e396cc983035c0004f094a3",
      text:
        "Sebuah benda bergerak sepanjang sumbu x dengan percepatan a(t)=-4+3. Mula-mula benda bergerak ke arrah sumbu x positif dari keadaan diam. Manakah pernyataan berikut yang benar?",
      points: 4,
      choices: [
        {
          _id: "5e396cc983035c0004f094a4",
          text: "Pada t=0,75 detik benda berhenti.",
          value: true
        },
        {
          _id: "5e396cc983035c0004f094a5",
          text:
            "Sebelum t=0,75 detik benda mengalami perlambatan sampai berhenti sesaat.",
          value: false
        },
        {
          _id: "5e396cc983035c0004f094a6",
          text:
            "Setelah t=0,75 detik benda mengalami perlambatan kemudian bergerak konstan.",
          value: false
        },
        {
          _id: "5e396cc983035c0004f094a7",
          text:
            "Setelah t=0,75 detik benda mengalami perlambatan kemudian bergerak konstan.",
          value: false
        },
        {
          _id: "5e396cc983035c0004f094a8",
          text:
            "Setelah t=0,75 detik benda diperlambat sampai berhenti sesaat kemudian dipercepat.",
          value: false
        }
      ],
      __v: 0
    }
  ]
};

export default function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return [...questions, action.payload];
    default:
      return questions;
  }
}
