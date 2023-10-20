import { ProviderWrapper as FeedbackProviderWrapper } from "contexts/FeedbackContext";
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <FeedbackProviderWrapper >
        <App />
 
      </FeedbackProviderWrapper >
  )
}
export default AppLoader;