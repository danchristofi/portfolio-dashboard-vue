<template>
  <footer>
    <Container>
      <div class="main">
        <aside>
          <div class="flex aic">
            <span class="text-xxl flex aic">
              <Icon class="mr-4" />
              <span class="font-normal">Dash</span>
              <b>Board</b>
            </span>
          </div>
          <p class="mb-0">
            Registered in England & Wales <br />
            Company Number 000000
          </p>
        </aside>

        <ul>
          <li><h6>Contact</h6></li>
          <li>
            <address>
              123 Fake Street <br />
              Fake Business Park <br />
              Manchester <br />
              M00 000
            </address>
          </li>
        </ul>

        <ul>
          <li><h6>Follow Us</h6></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>

        <ul>
          <li><h6>Useful Links</h6></li>
          <li><a href="#">My Account</a></li>
          <li><a href="#">My Content</a></li>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div class="bar">
        <ul>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Sitemap</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </Container>
  </footer>
</template>

<script>
import Container from "@/components/Container";
import Icon from "@/components/ui/Icon";
export default {
  name: "SiteFooter",
  components: {
    Container,
    Icon,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixins";
@import "../assets/css/window-breakpoints";

footer {
  background: var(--bgContrastFaded);
  width: 100%;
  display: flex;
  flex-direction: column;
  a,
  address,
  p {
    font-size: 12px;
    text-decoration: none;
    display: inline-flex;
    opacity: 0.7;
    line-height: 1.6em;
    transition: opacity 0.2s ease-in-out;
  }
  address,
  p {
    line-height: 2.2em;
  }
  a {
    &:hover {
      opacity: 1;
    }
  }
}

.main {
  padding: var(--spV) 0;
  display: flex;
  @include screen($screenLg) {
    flex-wrap: wrap;
  }
  ul {
    width: auto;
    margin-right: 10%;
    white-space: nowrap;
    @include screen($screenLg) {
      width: 33%;
      margin: 0;
    }
    @include screen($screenSm) {
      width: 100%;
      margin-bottom: var(--spV);
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    h6 {
      margin-bottom: 1em;
    }
    a {
      padding: 0.3em 0;
    }
  }
}

.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(var(--contrast), 0.2);
  padding: 1rem 0;
  @include screen($screenSm) {
    padding: var(--spV) 0;
  }
  ul {
    display: flex;
    align-items: center;
    @include screen($screenSm) {
      flex-direction: column;
      width: 100%;
      li {
        width: 100%;
      }
    }
  }
  a {
    padding: 0.6rem 1rem;
    @include screen($screenSm) {
      padding-left: 0;
    }
  }
}

aside {
  flex-grow: 1;
  @include screen($screenLg) {
    width: 100%;
    margin-bottom: var(--spV);
  }
}
</style>
