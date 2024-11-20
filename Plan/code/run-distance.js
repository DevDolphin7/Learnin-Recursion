function run(distance) {
  const remainingDistance = distance - 1;
  if (remainingDistance > 0) {
    console.log(`${remainingDistance} km left`);
    run(remainingDistance);
  } else {
    console.log("I've finished!");
  }
}

run(5);
