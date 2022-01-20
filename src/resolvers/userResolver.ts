const tempResult = {
  _id: '61e5ee9f75a0117e4a68598c',
  user: 'WillParrCodes',
  links: [{ title: 'Youtube Channel', link: 'youtube.com' }],
};

const results = [tempResult];

type Link = {
  title: string;
  link: string;
};

type User = {
  _id: string;
  user: string;
  links: Array<Link>;
};

export function getUser(
  parent: any,
  args: { user: string },
  context: any,
): User | undefined {
  const { user } = args;
  const result = results.find(el => user === el.user);
  return result;
}
