import { Button } from './ui/button';

function Actions() {
  const handleClick = () => {
    alert('clicked');
  };
  return (
    <div>
      <Button onClick={handleClick}>Botton</Button>
    </div>
  );
}

export { Actions };
