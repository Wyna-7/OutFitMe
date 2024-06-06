const baseURL = 'http://localhost:3000';

const addImage = async (formData) => {
  const { imgURL, item, tempRange, rain } = formData;
  console.log('did data get here?', imgURL, item, tempRange, rain); //data is ok
  const image = await fetch(`${baseURL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgURL, item, tempRange, rain }),
  }).then((res) => console.log('addImage res', res)); //500 here

  console.log('Image posted!', image);

  return image;
};

export { addImage };
