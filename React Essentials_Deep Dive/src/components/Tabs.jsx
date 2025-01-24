export default function Tabs({ tabs, children }) {
    return (
        <>
            <menu>
                {tabs}
            </menu>
            {children}
        </>
    );
}