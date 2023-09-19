import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <div role="list" {...props}>
      <Office name="Ferrara" invert={invert}>
        Vigarano Mainarda
        <br />
        Via dell artigianato 5B
      </Office>
    </div>
  );
};

export default Offices;
