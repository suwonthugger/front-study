import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders learn react link', () => {
    const { container } = render(<App />);

    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // expect(container.getElementsByClassName('App-logo')).toHaveLength(1);
    // expect(container.getElementsByClassName('App-logo')[0]).toHaveAttribute(
    //   'src',
    //   'logo.svg'
    // );

    const appLogo = screen.getByAltText('logo');
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute('src', 'logo.svg');

    expect(container.getElementsByTagName('p')).toHaveLength(1);
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
      'Edit src/App.tsx and save to reload'
    );

    expect(container).toMatchSnapshot();

    //     Testing Library"의 철학 중 하나는 사용자의 관점에서 테스트를 작성하는 것입니다. 이 라이브러리의 목표는 단순히 코드가 작동하는 것을 확인하는 것이 아니라, 사용자가 실제로 웹사이트 또는 앱을 사용하는 방식을 테스트하는 것입니다.

    // 따라서, "getByRole()"과 같은 메서드를 사용하면, 웹사이트 또는 앱을 사용하는 사용자의 경험에 더 집중할 수 있습니다. 예를 들어, "getByRole('button', { name: /submit/i })"와 같은 테스트는 "제출"이라는 이름을 가진 버튼이 존재하는지 확인합니다. 이는 사용자가 버튼을 클릭하여 폼을 제출하는 행동을 테스트하므로, 실제 사용자 경험에 더 가깝습니다.

    // 반면에, "container" 메서드를 사용하는 것은 종종 구현 세부사항에 너무 집중하는 경향이 있습니다. 예를 들어, "container.getElementsByClassName()" 메서드는 특정 클래스 이름을 가진 요소가 있는지 확인하지만, 이는 사용자의 경험과는 거리가 멀 수 있습니다. 사용자는 클래스 이름을 알지 못하며, 클래스 이름은 종종 CSS 스타일링이나 JavaScript 로직에 사용되는 구현 세부사항입니다.

    // 따라서, "Testing Library" 메서드를 사용하는 것이 좋습니다. 이를 통해 사용자의 관점에서 테스트를 작성하고, 사용자 경험에 대한 실제적인 피드백을 얻을 수 있습니다. 이는 더 품질 높은 소프트웨어를 개발하는 데 도움이 됩니다.
  });
});
