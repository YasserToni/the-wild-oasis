/*eslint-disable */

import supabase, { supabaseUrl } from "./supabase";

export default async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //https://xgexgozobxxnykzccllh.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg

  console.log(newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  console.log(imageName);
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  console.log(imagePath);
  // 1. create/edit a cabin
  let query = supabase.from("cabins");
  // A) create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  // B) EdIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  // .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could no be created");
  }
  // 2. upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //. Delete the cabin If there was an error uploading image
  if (storageError) {
    // await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "Cabins could not be uploade and the cabin was not created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins could no be deleted");
  }
  // console.log(data);
  return data;
}
