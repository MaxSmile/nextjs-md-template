import AnimateHeight from 'react-animate-height';
import ToggleIcon from '../ToggleIcon';

const FaqItem = ({ question, answer, isActive, onClick }) => (
  <div className="pb-2 border-gray/20">
    <button
      className="relative flex"
      onClick={onClick}
    >
      <h3 className="blackheading">{question}</h3>
      <ToggleIcon isActive={isActive} />
    </button>
    <AnimateHeight duration={600} height={isActive ? 'auto' : 0}>
      <div className="p-2">
        {Array.isArray(answer) ? 
          answer.map((item, index) => <p className="pb-2" key={index}>{item}</p>) : 
          <p className="text-gray">{answer}</p>
        }
      </div>
    </AnimateHeight>
  </div>
);

export default FaqItem;
