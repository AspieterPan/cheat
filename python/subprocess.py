import subprocess


def run_c_program():
    # 运行编译后的 C 程序并捕获其输出
    result = subprocess.run(["./your_c_program"], capture_output=True, text=True)
    return result.stdout


def test_binary_output():
    expected_output = "Expected output"  # 期望的输出

    # 运行 C 程序
    output = run_c_program()

    # 检查输出是否与期望的输出一致
    if output.strip() == expected_output:
        print("Test passed!")
    else:
        print("Test failed. Actual output:", output)


if __name__ == "__main__":
    test_binary_output()
