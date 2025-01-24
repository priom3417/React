export default function Section({ title, children, ...rest }) {
    return (
        <section {...rest}> {/* Forward Props */}
            <h2>{title}</h2>
            {children}
        </section>
    );
}