namespace Backend1.Services;

public class CalcService
{
    public double Add(double a, double b) => a + b;
    public double Sub(double a, double b) => a - b;
    public double Mult(double a, double b) => a * b;
    public double Div(double a, double b) => b == 0 ? double.NaN : a / b;
}
