import { createScreenshotsComparer } from '../../../utils/visual-tests/screenshot-comparer';
import { runManualTest } from '../../../utils/visual-tests/matrix-test-helper';

fixture('DataGrid.Columns')
  .page('http://localhost:8080/')
  .beforeEach(async (t) => {
    await t
      .resizeWindow(900, 600);
  });

runManualTest(test, 'DataGrid', 'ColumnCustomization', 'jQuery', (test) => {
  test('ColumnCustomization', async (t) => {
    const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

    await takeScreenshot('datagrid_column_customization_1');

    await t
      .click('.dx-icon-column-chooser');

    await takeScreenshot('datagrid_column_customization_2');

    await t
      .drag('td[aria-label=\'Column Birth Date\']',
        500, 200,
        { offsetX: 5, offsetY: 5 });

    await takeScreenshot('datagrid_column_customization_3');

    await t
      .click('.dx-closebutton');

    await takeScreenshot('datagrid_column_customization_4');

    await t
      .expect(compareResults.isValid())
      .ok(compareResults.errorMessages());
  });
});
