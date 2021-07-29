const service = require('./genNum')

describe('Test if function that generate number mocked', () => {

  it('should return 10 as std', () => {
    expect.assertions(2)

    service.genNum = jest
      .fn()
      .mockReturnValue(10)

    service.genNum();

    expect(service.genNum).toHaveBeenCalled();
    expect(service.genNum()).toBe(10);
  })

  it('Should mockImplement return sum of 2 parameters', () => {
    expect.assertions(1)
    
    service.genNum = jest.fn().mockImplementation(() => 4 * 2)
    service.genNum();

    expect(service.genNum()).toBe(8);
  })

  it('should spy on a function and reset the mock', () => {
    expect.assertions(4)

    const mockMult = jest
      .spyOn(service, 'mult')

    mockMult(2,2);
    expect(mockMult).toHaveBeenCalled();
    expect(mockMult).toHaveBeenCalledTimes(1);
    expect(mockMult(3,2)).toBe(6);
    expect(mockMult).toBeCalledWith(2,2)   
  })

  it('should, using mock, create a new implementation that return the multiplication of 3 parameters', () => {
    expect.assertions(1)

    service.genNum = jest
      .fn()
      .mockImplementation((a, b, c) => a * b * c)
    
      service.genNum();

    expect(service.genNum(4, 4, 4)).toBe(64);
    
  })
})
