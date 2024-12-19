<template>
  <aside :class="`${isExpanded ? 'isExpanded' : ''}`">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleManu">
        <img
          class="menu-icon-keyboard-double-arrow"
          alt="keyboard_double_arrow_right"
          src="../assets/icons/keyboard_double_arrow_right.png"
        />
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link class="button" to="/">
        <img class="menu-icons" alt="home" src="../assets/icons/home.png" />
        <span class="material-icons">Home</span>
      </router-link>
      <router-link class="button" to="/about">
        <img
          class="menu-icons"
          alt="description"
          src="../assets/icons/description.png"
        />
        <span class="material-icons">About</span>
      </router-link>
      <router-link class="button" to="/welcome">
        <img class="menu-icons" alt="group" src="../assets/icons/group.png" />
        <span class="material-icons">Welcome</span>
      </router-link>
    </div>
    <button
      class="isNavegationBlocked"
      @click="toggleNavigationBlock"
      :class="{ blocked: isNavegationBlocked }"
    >
      <img
        class="menu-icon-block"
        :style="{
          filter: isNavegationBlocked ? 'invert(0%)' : 'invert(50%)',
        }"
        alt="block"
        src="../assets/icons/block.png"
      />
    </button>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isExpanded = ref(false);
const isNavegationBlocked = ref(false);

const toggleNavigationBlock = () => {
  isNavegationBlocked.value = !isNavegationBlocked.value;
  localStorage.setItem(
    "navigationBlock",
    JSON.stringify(isNavegationBlocked.value)
  );
  console.log(
    `Status de bloqueio de navegação alterado: ${isNavegationBlocked.value}`
  );
};

onMounted(() => {
  const storedValue = localStorage.getItem("navigationBlock");
  isNavegationBlocked.value = storedValue ? JSON.parse(storedValue) : false;
  console.log(
    `Componente montado. Navegação bloqueada: ${isNavegationBlocked.value}`
  );
});

const ToggleManu = () => {
  isExpanded.value = !isExpanded.value;
  // console.log(`Menu alternado. Expandido: ${isExpanded.value}`);
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;

  background-color: var(--);
  color: var(--light);

  // width: calc(2rem + 32px);
  width: calc(2rem + 52px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;

  transition: 0.2s ease-in-out;
  // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;
    // margin-left: auto;
    // margin-right: auto;
    margin-left: 0.5rem;
    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    // margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;
      .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
      }
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;
      color: var(--grey);

      .material-icons {
        font-size: 1.5rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
        color: var(--grey);
      }
      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
        color: var(--grey);
      }

      &:hover {
        // background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        // background-color: var(--dark-alt);

        border-right: 5px solid var(--primary);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }
    }
  }

  .menu-icon-keyboard-double-arrow {
    filter: invert(50%);
    // color: var(--grey);
  }

  .menu-icons {
    // filter: invert(100%);
    filter: invert(50%);
    color: var(--grey);
    margin-left: 15px;
    margin-right: 2rem;
  }
  .menu-icon-block {
    // filter: invert(100%);
    filter: invert(50%);
    color: var(--grey);
    margin-top: 1010px;
    margin-left: 15px;
    margin-right: 2rem;
  }
  &.blocked {
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.isExpanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      // top: -3rem;
      margin-left: 5px;
      margin-right: 5px;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>
