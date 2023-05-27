import { Provider } from 'react-redux';
import './App.css';
import { useLocalization } from './localization';
import { rootStore } from './store';
import ItemsView from './views/Items.view';
import PrimitivesView from './views/Primitives.view';

function App() {
  const { t, locales, currentLocale, getUserPreferredLocale, changeLocale } = useLocalization();

  const handleLocaleClick = (localId: string) => {
    changeLocale(localId);
  };

  return (
    <Provider store={rootStore}>
      <div className="App">
        <div className="locale-selector">
          {locales.map((item) => {
            const radioId = `radio-locale-${item.key}`;
            return (
              <label
                key={item.key}
                htmlFor={radioId}
                className="cursor-pointer"
                onClick={() => handleLocaleClick(item.key)}>
                <input
                  type="radio"
                  name="locale"
                  id={radioId}
                  radioGroup={currentLocale}
                  value={item.key}
                  checked={currentLocale === item.key}
                  onChange={() => {}}
                />
                {t(`local.selector.${item.key}`)}
              </label>
            );
          })}
        </div>
        <h1>{t('home.welcome')}</h1>
        <ItemsView />
        <PrimitivesView />
      </div>
    </Provider>
  );
}

export default App;
