export default function TabButton({ children, isActiveTab, ...rest }) {
    return (
      <li>
        <button className={isActiveTab ? 'active' : ''} {...rest}>{children}</button> {/* Forward Props */}
      </li>
    );
}