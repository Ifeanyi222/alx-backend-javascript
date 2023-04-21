import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoUser = uploadPhoto();
  const user = createUser();

  return Promise.all([photoUser, user]).then((res) => {
    console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
