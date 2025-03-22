import { useNavigation } from 'react-router-dom';
import Wrapper from '../assets/SubmitBtn';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <button className="btn btn-neutral mt-4 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
           <span className="loading-spinner loading-xs"></span>
          </>
        ) : (
          text || 'submit'
        )}
      </button>
    </Wrapper>
  );
};
export default SubmitBtn;
