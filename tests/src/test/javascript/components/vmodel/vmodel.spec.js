import {expect} from 'chai'
import {
  createAndMountComponent,
  destroyComponent,
  nextTick,
  onGwtReady,
  triggerEvent
} from '../../vue-gwt-tests-utils'

describe('v-model', () => {
  let component;

  beforeEach(() => onGwtReady().then(() => {
    component = createAndMountComponent(
        'com.axellience.vuegwt.tests.client.components.vmodel.VModelComponent');
  }));

  afterEach(() => {
    destroyComponent(component);
  });

  describe('input text', () => {
    let textInput;

    beforeEach(() => {
      textInput = component.$el.querySelector("#vmodelTextInput");
    });

    it('should set the initial value in the text box', () => {
      expect(textInput.value).to.equal('initialValue');
      expect(component.getInputTextValue()).to.equal('initialValue');
    });

    it('should change input value when data is changed', () => {
      component.setInputTextValue('newValueFromData');

      return nextTick().then(() => {
        expect(textInput.value).to.equal('newValueFromData');
        expect(component.getInputTextValue()).to.equal('newValueFromData');
      });
    });

    it('should change data field when input value is changed', () => {
      textInput.value = "newValueFromInput";
      triggerEvent(textInput, "input");

      return nextTick().then(() => {
        expect(textInput.value).to.equal('newValueFromInput');
        expect(component.getInputTextValue()).to.equal('newValueFromInput');
      });
    });
  });

  describe('variable with dollar sign in name', () => {
    let textInput;

    beforeEach(() => {
      textInput = component.$el.querySelector("#inputTextValueWithDollar");
    });

    it('should set the initial value in the text box', () => {
      expect(textInput.value).to.equal('initialValue');
      expect(component.getInputTextValue$WithDollar()).to.equal('initialValue');
    });

    it('should change input value when data is changed', () => {
      component.setInputTextValue$WithDollar('newValueFromData');

      return nextTick().then(() => {
        expect(textInput.value).to.equal('newValueFromData');
        expect(component.getInputTextValue$WithDollar()).to.equal('newValueFromData');
      });
    });

    it('should change data field when input value is changed', () => {
      textInput.value = "newValueFromInput";
      triggerEvent(textInput, "input");

      return nextTick().then(() => {
        expect(textInput.value).to.equal('newValueFromInput');
        expect(component.getInputTextValue$WithDollar()).to.equal('newValueFromInput');
      });
    });
  });

  describe('computed property with getter/setter', () => {
    let textInput;

    beforeEach(() => {
      textInput = component.$el.querySelector("#computedInputTextValue");
    });

    it('should set the initial value in the text box', () => {
      expect(textInput.value).to.equal('initialBobby');
      expect(component.getComputedInputTextValueProperty()).to.equal('initialValue');
    });

    it('should change input value when data is changed', () => {
      component.setComputedInputTextValueProperty('newValueFromData');

      return nextTick().then(() => {
        expect(textInput.value).to.equal('newBobbyFromData');
        expect(component.getComputedInputTextValueProperty()).to.equal('newValueFromData');
      });
    });

    it('should change data field when input value is changed', () => {
      textInput.value = "newValueFromInput";
      triggerEvent(textInput, "input");

      return nextTick().then(() => {
        expect(textInput.value).to.equal('newBobbyFromInput');
        expect(component.getComputedInputTextValueProperty()).to.equal('newValueFromInput');
      });
    });
  });
});