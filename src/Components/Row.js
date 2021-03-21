export const Row = ({data, icon}) => {
  return (
    <>
      <td className='id-row'>
        <span>{icon}</span>
        {data.id}
      </td>
      <td>{data.parentId}</td>
      <td>{String(data.isActive)}</td>
      <td>{data.balance}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
    </>
  );
};
