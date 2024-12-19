<template>
  <div class="about">
    <h1>
      <span class="gradient-text">This is the home page</span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
$gradient-start: #34495e;
$gradient-end: #41b883;

.img {
  position: absolute;
  top: 0;
  right: -1300px;
  height: 100%;
  z-index: 1;
  width: 100vh;
}

.about {
  flex: 1;
  padding: 20px;
  text-align: center;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90vh;
  z-index: 2;
}

.gradient-text {
  background: linear-gradient(to right, $gradient-start, $gradient-end);
  -webkit-background-clip: text;
  color: transparent;
  display: inline-block;
  font-family: "Fira Sans", sans-serif;
}

.button {
  cursor: pointer;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 40px;
  background: linear-gradient(to right, $gradient-start, $gradient-end);
  color: white;
  transition: background 0.3s ease, color 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(to right, $gradient-end, $gradient-start);
    color: black;
  }
}
</style>
