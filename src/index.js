import { createRoot } from 'react-dom/client';

function Test() {
    return (
        <h1>HELLO</h1>
    );
}

const domNode = document.getElementById('Test');
const root = createRoot(domNode);

root.render(<Test />);