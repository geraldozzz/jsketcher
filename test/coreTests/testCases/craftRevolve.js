import {createPlaneAndOpenSketcher, extrudeCube} from '../utils/scripts';

export const TEST_MODE = 'modellerUI';

export async function testRevolveHalfWay(env, ui) {
  await createPlaneAndOpenSketcher(ui);
  let sui = ui.openSketcher();
  sui.addRectangle(20, -50, 50, 50);
  sui.changeToConstructionLayer();
  sui.addSegment(0, -50, 0, 50);
  ui.commitSketch();

  ui.openWizard('REVOLVE');
  ui.wizardContext.updateParam('angle', 180);
  ui.select([0, 0, 10], [0, 0, -10]);
  await ui.wizardOK();


}

export async function testRevolveAllWay(env, ui) {
  await createPlaneAndOpenSketcher(ui);
  let sui = ui.openSketcher();
  sui.addRectangle(20, -50, 50, 50);
  sui.changeToConstructionLayer();
  sui.addSegment(0, -50, 0, 50);
  ui.commitSketch();

  ui.openWizard('REVOLVE');
  ui.wizardContext.updateParam('angle', 360);
  ui.select([0, 0, 10], [0, 0, -10]);
  await ui.wizardOK();


}

