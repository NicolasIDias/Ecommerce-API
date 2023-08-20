import schema from '../../Mocks/UserMock';

async function generateUniqueId(): Promise<string> {
  let uniqueId: string;

  do {
    uniqueId = generateId();
    const count = await schema.countDocuments({ id: uniqueId });
    if (count === 0) {
      break;
    }
  } while (true);

  return uniqueId;
}

function generateId(): string {
  const timestamp = (Math.floor(new Date().getTime() / 1000)).toString(16);
  return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
    return (Math.floor(Math.random() * 16)).toString(16);
  }).toLowerCase();
}

export default generateUniqueId;
