import React, { useState, FormEvent } from 'react';
import { PaymentData, useAcceptJs} from 'react-acceptjs';
import { ErrorMessage } from 'react-acceptjs/dist/types';

const authData = {
  apiLoginID: '9HscE77J',
  clientKey: '63cTd8d69BmC7ZGaFW7k4tsApAKs46uzEnHFg8muBQ98WtC74W7MzEbnTRNJ4Z5Z',
};

type BasicCardInfo = {
  cardNumber: string;
  cardCode: string;
  month: string;
  year: string;
};

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const { dispatchData, loading, error } = useAcceptJs({ authData });
  const [cardData, setCardData] = useState<BasicCardInfo>({
    cardNumber: '',
    month: '',
    year: '',
    cardCode: '',
  });


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      console.log(cardData);
      dispatchData({cardData}).then((response)=>{console.log('Token:', response.opaqueData.dataValue)}).catch((error)=>{console.table(error.messages.message)})
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='cardNumber'>Card Number</label>
      <input
        type="text"
        name="cardNumber"
        id="cardNumber"
        value={cardData.cardNumber}
        onChange={(event) =>
          setCardData({ ...cardData, cardNumber: event.target.value })
        }
      />
            <label htmlFor='month'>Month</label>
      <input
        type="text"
        name="month"
        id="month"
        value={cardData.month}
        onChange={(event) =>
          setCardData({ ...cardData, month: event.target.value })
        }
      />
            <label htmlFor='year'>Year</label>
      <input
        type='text'
        name="year"
        id="year"
        value={cardData.year}
        onChange={(event) =>
          setCardData({ ...cardData, year: event.target.value })
        }
      />
            <label htmlFor='cvv'>CVV</label>
      <input
        type="text"
        name="cardCode"
        id="cvv"
        value={cardData.cardCode}
        onChange={(event) =>
          setCardData({ ...cardData, cardCode: event.target.value })
        }
      />
      <button type="submit" disabled={loading||error}>
        Pay
      </button>
    </form>
  );
};

export default App;
