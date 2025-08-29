function SubTitle({ children, className }: { children: string; className?: string }) {
  return <h2 className={`sub-title ${className}`}>{children}</h2>;
}

export default SubTitle;
